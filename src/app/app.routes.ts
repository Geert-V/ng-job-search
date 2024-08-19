import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';

export const routes: Routes = [
    {
        path: "jobs",
        component: JobListComponent,
        title: "Jobs"
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/jobs"
    }
];
