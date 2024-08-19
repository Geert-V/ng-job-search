import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../core/models/job.model';
import { JobService } from '../core/services/job.service';
import { AsyncPipe } from '@angular/common';
import { JobItemComponent } from '../components/job-item/job-item.component';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    AsyncPipe,
    JobItemComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  public jobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {
  }

  public ngOnInit(): void {
    this.jobs$ = this.jobService.getFavorites();
  }
}
