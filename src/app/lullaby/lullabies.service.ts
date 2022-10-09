import {
  Observable,
  catchError,
  concatAll,
  map,
  of
} from 'rxjs';
import { ConfigService } from '../config.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LullabySong } from './lullaby-song';

@Injectable({
  providedIn: 'root'
})
export class LullabiesService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly configService: ConfigService) { }

  public getSong(): Observable<LullabySong | null> {
    return this.configService
      .getLullabySongUrl()
      .pipe(
        map((url: string) => this.httpClient.get<LullabySong>(url).pipe(map(this.cleanUpSong))),
        concatAll(),
        catchError(() => of(null)));
  }

  public updateSong(song: LullabySong): Observable<LullabySong | null> {
    // @ts-ignore
    song.mute = song.mute ? 1 : 0;
    return this.configService
      .getLullabySongUrl()
      .pipe(
        map((url: string) => this.httpClient.post<LullabySong>(url, song).pipe(map(this.cleanUpSong))),
        concatAll(),
        catchError(() => of(null)));
  }

  public load(): Observable<string[]> {
    return this.configService
      .getLullabyListUrl()
      .pipe(
        map((url: string) => this.httpClient.get<string[]>(url)),
        concatAll(),
        catchError(() => of([])));
  }

  private cleanUpSong (song: LullabySong): LullabySong {
    song.mute = !!song.mute;
    song.track = decodeURIComponent(song.track.replace('file://', ''));

    return song;
  }
}
