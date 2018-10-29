import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { SubredditComponent } from './subreddit/subreddit.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'r/:subredditName',
    component: SubredditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);