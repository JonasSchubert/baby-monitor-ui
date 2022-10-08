import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  public source: string = '';

  constructor(private readonly configService: ConfigService) { }

  get height(): string {
    return this.configService.isMobile ? `${window.innerWidth * 0.85 * 0.75}` : '480';
  }

  get width(): string {
    return this.configService.isMobile ? `${window.innerWidth * 0.85}`  : '640';
  }

  ngOnInit(): void {
    this.configService.getStreamMjpegUrl().subscribe((source: string): void => { this.source = source; });
  }
}
