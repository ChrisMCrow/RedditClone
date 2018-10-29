import { Injectable } from '@angular/core';
import { Subreddit } from './models/subreddit.model';
import { SUBREDDITS } from './mock-data';
import { Thread } from './models/thread.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class SubredditService {

  constructor() { }

  getSubreddits(): Subreddit[] {
    return SUBREDDITS;
  }
}
