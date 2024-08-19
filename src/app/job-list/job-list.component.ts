import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../core/models/job.model';
import { JobService } from '../core/services/job.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit {
  public jobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {
  }

  public ngOnInit(): void {
    this.jobs$ = this.jobService.getAll();
  }
}
