import { Injectable } from '@angular/core';
import { Subreddit } from './models/subreddit.model';
import { THREADS } from './mock-data';
import { Thread } from './models/thread.model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class ThreadService {

  constructor() { }

  getThreads(): Thread[] {
    return THREADS;
  }

  getFilteredThreads(subredditName: string): Thread[] {
    let filteredArray: Thread[] = [];

    THREADS.forEach(function(thread) {
      if (thread.subreddit == subredditName) {
        filteredArray.push(thread);
      }
    });

    return filteredArray;
  }

}
