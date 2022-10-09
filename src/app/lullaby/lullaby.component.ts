import { Component, OnInit } from '@angular/core';
import { LullabiesService } from './lullabies.service';
import { LullabySong } from './lullaby-song';

@Component({
  selector: 'app-lullaby',
  templateUrl: './lullaby.component.html',
  styleUrls: ['./lullaby.component.scss']
})
export class LullabyComponent implements OnInit {
  list: string[] = [];

  song: LullabySong = { mute: false, status: '', track: '', volume: 30 };

  constructor(private readonly lullabiesService: LullabiesService) { }

  ngOnInit(): void {
    this.lullabiesService
      .load()
      .subscribe((list: string[]) => (this.list = list));
  }

  public cleanUpTrackName(track: string): string {
    return track.replace('/mnt/lullaby-songs/', '');
  }

  public onMuteChange(mute: boolean): void {
    this.song.mute = mute;
    this.updateSong();
  }

  public onVolumeChange(volume: number): void {
    this.song.volume = volume;
    this.updateSong();
  }

  public onPlay(track: string): void {
    this.song.track = track;
    this.updateSong();
  }

  public onStop(): void {
    this.song.track = '';
    this.updateSong();
  }

  private updateSong(): void {
    this.lullabiesService
      .updateSong(this.song)
      .subscribe();
  }
}
