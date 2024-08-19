import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../core/models/job.model';
import { FavoriteService } from '../../core/services/favorite.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.css'
})
export class JobItemComponent implements OnInit {
  @Input({required: true}) job!: Job;
  @Input() showFavoriteIcon = false;

  public isFavorite$!: Observable<boolean>;

  constructor(private favoriteService: FavoriteService) {
  }

  public ngOnInit(): void {
    this.isFavorite$ = this.favoriteService.get(this.job.id);
  }

  public toggleFavorite(): void {
    this.favoriteService.toggle(this.job.id);
  }
}
