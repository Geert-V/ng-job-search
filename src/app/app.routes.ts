import { Routes } from '@angular/router';
import { JobListComponent } from './features/job-list/job-list.component';
import { FavoritesComponent } from './features/favorites/favorites.component';
import { DetailsComponent } from './features/details/details.component';

export const routes: Routes = [
    {
        path: "jobs/:jobId",
        component: DetailsComponent,
        title: "Job details"
    },
    {
        path: "jobs",
        component: JobListComponent,
        title: "Jobs"
    },
    {
        path: "favorites/:jobId",
        component: DetailsComponent,
        title: "Job details"
    },
    {
        path: "favorites",
        component: FavoritesComponent,
        title: "Favorites"
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/jobs"
    }
];
