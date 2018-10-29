import { Injectable } from '@angular/core';
import { Subreddit } from './models/subreddit.model';
import { THREADS } from './mock-data';
import { Thread } from './models/thread.model';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ThreadService {
  threads: FirebaseListObservable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.threads = database.list('threads');
  }

  getThreads() {
    return this.threads;
  }

  addThread(newThread: Thread) {
    this.threads.push(newThread);
  }

  getThreadById(threadId: number) {
    // for (var i = 0; i <= ALBUMS.length - 1; i++) {
    //   if (ALBUMS[i].id === albumId) {
    //     return ALBUMS[i];
    //   }
    // }
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
