import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { SubredditComponent } from './subreddit/subreddit.component';
import { CreatePostComponent } from './create-post/create-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: FrontPageComponent
  },
  {
    path: 'r/:subredditName',
    component: SubredditComponent
  },
  { 
    path: 'create-post',
    component: CreatePostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);