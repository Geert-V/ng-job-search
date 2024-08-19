import { Component, Input, OnInit } from '@angular/core';
import { JobService } from '../core/services/job.service';
import { JobDetails } from '../core/models/job-details.model';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  @Input() jobId!: number;

  public job$!: Observable<JobDetails>;
  public backUrl: string;

  constructor(
    router: Router,
    private jobService: JobService) {
      const previousUrl = router.lastSuccessfulNavigation?.initialUrl?.toString();
      this.backUrl = '../';//previousUrl ?? '/jobs';
  }

  public ngOnInit(): void {
    this.job$ = this.jobService.getDetails(this.jobId);
  }
}
