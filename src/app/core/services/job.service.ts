import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobDto } from '../data/job.dto';
import { Job } from '../models/job.model';
import { map, Observable } from 'rxjs';
import { JobDetails } from '../models/job-details.model';
import { JobDetailsDto } from '../data/job-details.dto';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Job[]> {
    return this.httpClient
      .get<JobDto[]>('/jobs')
      .pipe(
        map(dtos => dtos.map(JobService.jobDtoToModel))
      );
  }

  public getDetails(id: number): Observable<JobDetails> {
    return this.httpClient
      .get<JobDetailsDto>(`/jobs/${id}`)
      .pipe(
        map(JobService.jobDetailsDtoToModel)
      );
  }

  private static jobDtoToModel(dto: JobDto): Job {
    return new Job(
      dto.id,
      new Company(dto.companyName, dto.companyLogo),
      dto.title,
      dto.reference
    );
  }

  private static jobDetailsDtoToModel(dto: JobDetailsDto): JobDetails {
    return new JobDetails(
      dto.id,
      new Company(dto.companyName, dto.companyLogo),
      dto.title,
      dto.reference,
      dto.location,
      dto.industries,
      dto.types,
      dto.description,
      new Date(dto.publishDate)
    );
  }
}
