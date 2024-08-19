import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private readonly localStorageKey = 'favorites';
  private readonly subjects: { [id: number]: Subject<boolean> } = {};

  constructor() {
    this.initSubjects();
  }

  public get(jobId: number): Observable<boolean> {
    return this.getSubject(jobId);
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
    this.getSubject(jobId).next(!isFavorite);
  }

  private initSubjects(): void {
    this
      .getFavorites()
      .forEach(jobId => {
        const subject = new ReplaySubject<boolean>(1);
        subject.next(true);
        this.subjects[jobId] = subject;
      });
  }

  private getSubject(jobId: number): Subject<boolean> {
    if (this.subjects[jobId]) {
      return this.subjects[jobId];
    } else {
      const subject = new ReplaySubject<boolean>(1);
      subject.next(false);
      this.subjects[jobId] = subject;
      return subject;
    }
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
