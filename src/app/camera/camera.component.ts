import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  public videoSource: string = '';

  constructor(private readonly configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getStreamMjpegUrl().subscribe((url: string): void => { this.videoSource = url; });
  }
}
