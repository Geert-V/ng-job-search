import { Routes } from '@angular/router';
import { JobListComponent } from './job-list/job-list.component';
import { FavoritesComponent } from './favorites/favorites.component';

export const routes: Routes = [
    {
        path: "jobs",
        component: JobListComponent,
        title: "Jobs"
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
