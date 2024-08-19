import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly localStorageKey = 'favorites';
  private readonly favoritesSubject = new ReplaySubject<number[]>(1);

  constructor() {
    const favorites = this.getFavorites();
    this.favoritesSubject.next(favorites);
  }

  public get(jobId: number): Observable<boolean> {
    return this.favoritesSubject.pipe(
      map(favorites => favorites.indexOf(jobId) !== -1)
    );
  }

  public getAll(): Observable<number[]> {
    return this.favoritesSubject;
  }

  public toggle(jobId: number) {
    const favorites = this.getFavorites();
    const idx = favorites.indexOf(jobId);
    const isFavorite = idx !== -1;

    if (isFavorite) {
      favorites.splice(idx, 1);
    } else {
      favorites.push(jobId);
    }

    this.setFavorites(favorites);
    this.favoritesSubject.next(favorites);
  }

  private getFavorites(): number[] {
    const favoritesStr = localStorage.getItem(this.localStorageKey);
    if (favoritesStr) {
      return JSON.parse(favoritesStr);
    } else {
      return [];
    }
  }

  private setFavorites(jobIds: number[]): void {
    const favoritesStr = JSON.stringify(jobIds);
    localStorage.setItem(this.localStorageKey, favoritesStr);
  }
}
