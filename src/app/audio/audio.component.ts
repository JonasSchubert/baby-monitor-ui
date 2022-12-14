import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  public source: string = '';

  constructor(private readonly configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getAudioUrl().subscribe((source: string): void => { this.source = source; });
  }
}
