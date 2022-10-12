import { Component, OnInit } from '@angular/core';
import { catchError, concatAll, map, of } from 'rxjs';
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
    const loadData = () => this.configService.getHealthcheckUrl().pipe(map((url: string) => this.httpClient.get<Healthstatus>(url)), concatAll(), catchError(() => of({ status: 'error' })));
    const handleStatus = (status: Healthstatus): void => { this.status = status; };

    loadData().subscribe(handleStatus); // First call to immediately display data without waiting for first interval
    this.requestIntervall = setInterval((): void => { loadData().subscribe(handleStatus); }, 5 * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.requestIntervall);
  }
}
