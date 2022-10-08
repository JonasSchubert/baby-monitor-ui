import { Observable, map } from 'rxjs';
import { Config } from './config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly configUrl: string = 'assets/config.json';

  constructor(private readonly httpClient: HttpClient) { }

  get isMobile(): boolean {
    return !!navigator.userAgent.match(/Android/i)
      || !!navigator.userAgent.match(/webOS/i)
      || !!navigator.userAgent.match(/iPhone/i)
      || !!navigator.userAgent.match(/iPad/i)
      || !!navigator.userAgent.match(/iPod/i)
      || !!navigator.userAgent.match(/BlackBerry/i)
      || !!navigator.userAgent.match(/Windows Phone/i);
  }

  public getConfig(): Observable<Config> {
    return this.httpClient.get<Config>(this.configUrl);
  }

  public getClimateUrl(): Observable<string> {
    return this.getConfig().pipe(map((config: Config): string => `${config.serverIp}:${config.serverPort}/${config.climateApi}`));
  }

  public getHealthcheckUrl(): Observable<string> {
    return this.getConfig().pipe(map((config: Config): string => `${config.serverIp}:${config.serverPort}/${config.healtcheckApi}`));
  }

  public getLatestJpgeUrl(): Observable<string> {
    return this.getConfig().pipe(map((config: Config): string => `${config.serverIp}:${config.serverPort}/${config.latestJpegApi}`));
  }

  public getStreamMjpegUrl(): Observable<string> {
    return this.getConfig().pipe(map((config: Config): string => `${config.serverIp}:${config.serverPort}/${config.streamMjpegApi}`));
  }

  public getAudioUrl(): Observable<string> {
    return this.getConfig().pipe(map((config: Config): string => `${config.serverIp}:${config.audioPort}`));
  }
}
