import { Component, OnInit } from '@angular/core';
import {
  Observable,
  catchError,
  concatAll,
  map,
  of
} from 'rxjs';
import { ConfigService } from '../config.service';
import { Healthstatus } from '../healthstatus';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public status: Healthstatus = { status: 'n.a.' };

  private requestIntervall: string | number | NodeJS.Timer | undefined;

  constructor(private readonly httpClient: HttpClient, private readonly configService: ConfigService) { }

  ngOnInit(): void {
    const handleStatus = (status: Healthstatus) => (this.status = status);
    this.loadData().subscribe(handleStatus); // First call to immediately display data without waiting for first interval
    this.requestIntervall = setInterval((): void => {
      this.loadData().subscribe(handleStatus);
    }, 5 * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.requestIntervall);
  }

  get healthcheck() {
    return this.status.status === 'up' ? { color: 'accent', text: 'Server Up' } : { color: 'warn', text: 'Server Down' };
  }

  private loadData(): Observable<Healthstatus> {
    return this.configService.getHealthcheckUrl().pipe(map((url: string) => this.httpClient.get<Healthstatus>(url)), concatAll(), catchError(() => of({ status: 'error' })));
  }
}
