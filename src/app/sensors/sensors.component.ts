import { Component, OnInit } from '@angular/core';
import {
  GAUGE_CLASS,
  HUMIDITY_LIMITS,
  SENSOR_TEMPERATURE_LIMITS,
  TEMPERATURE_LIMITS
} from './sensors.constants';
import {
  Observable,
  concatAll,
  map,
  tap
} from 'rxjs';
import { Climate } from './climate';
import { ConfigService } from '../config.service';
import { HttpClient } from '@angular/common/http';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.scss']
})
export class SensorsComponent implements OnInit {
  public climate: Climate = { humidity: { sensor: 0, unit: '%' }, temperature: { cpu: 0, gpu: 0, sensor: 0, unit: '°C' } };

  private requestIntervall: string | number | NodeJS.Timer | undefined;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService,
    private readonly notificationsService: NotificationsService) { }

  ngOnInit(): void {
    const handleStatus = (climate: Climate) => (this.climate = climate);

    this.loadData().pipe(tap((climate: Climate) => this.checkForNeedOfNotification(climate)), tap(handleStatus)).subscribe(); // First call to immediately display data without waiting for first interval
    this.requestIntervall = setInterval((): void => {
      this.loadData().pipe(tap((climate: Climate) => this.checkForNeedOfNotification(climate)), tap(handleStatus)).subscribe();
    }, 5 * 1000);

    this.notificationsService.requestPermission();
  }

  ngOnDestroy(): void {
    clearInterval(this.requestIntervall);
  }

  public evaluateHumidityClass(value: number): string {
    return (value >= HUMIDITY_LIMITS.DANGER.HIGH || value <= HUMIDITY_LIMITS.DANGER.LOW)
      ? GAUGE_CLASS.DANGER
      : (value >= HUMIDITY_LIMITS.WARN.HIGH || value <= HUMIDITY_LIMITS.WARN.LOW)
        ? GAUGE_CLASS.WARN
        : GAUGE_CLASS.OK;
  }

  public evaluateServerTemperatureClass(value: number): string {
    return (value >= SENSOR_TEMPERATURE_LIMITS.DANGER.HIGH || value <= SENSOR_TEMPERATURE_LIMITS.DANGER.LOW)
      ? GAUGE_CLASS.DANGER
      : (value >= SENSOR_TEMPERATURE_LIMITS.WARN.HIGH || value <= SENSOR_TEMPERATURE_LIMITS.WARN.LOW)
        ? GAUGE_CLASS.WARN
        : GAUGE_CLASS.OK;
  }

  public evaluateTemperatureClass(value: number): string {
    return (value >= TEMPERATURE_LIMITS.DANGER.HIGH || value <= TEMPERATURE_LIMITS.DANGER.LOW)
      ? GAUGE_CLASS.DANGER
      : (value >= TEMPERATURE_LIMITS.WARN.HIGH || value <= TEMPERATURE_LIMITS.WARN.LOW)
        ? GAUGE_CLASS.WARN
        : GAUGE_CLASS.OK;
  }

  public getLabel(unit: string): (value: number) => string {
    return (value: number): string => `${value.toFixed(2)} ${unit}`;
  }

  private checkForNeedOfNotification(climate: Climate): void {
    let title = '';

    if (this.evaluateTemperatureClass(climate.temperature.sensor) === GAUGE_CLASS.DANGER) {
      title = `Danger! The temperature around your baby is ${climate.temperature.sensor.toFixed(2)}°C!`;
    }

    if (this.evaluateTemperatureClass(climate.temperature.sensor) === GAUGE_CLASS.WARN) {
      title = `Warning! The temperature around your baby is ${climate.temperature.sensor.toFixed(2)}°C!`;
    }

    if (title !== '') {
      this.notificationsService
        .requestPermission()
        .then((permission: NotificationPermission): void => {
          if (permission === 'granted') {
            this.notificationsService.showNotification(title);
          }
        });
    }
  }

  private loadData(): Observable<Climate> {
    return this.configService.getClimateUrl().pipe(map((url: string) => this.httpClient.get<Climate>(url)), concatAll());
  }
}
