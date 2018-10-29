import { Component, OnInit } from '@angular/core';
import { Subreddit } from './models/subreddit.model';
import { Router } from '@angular/router';
import { ThreadService } from './thread.service';
import { Thread } from './models/thread.model';
import { SubredditService } from './subreddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThreadService, SubredditService]
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private threadService: ThreadService, private subredditService: SubredditService) {};
  title = 'Reddit Clone';

  subreddits: Subreddit[] = [];

  threads: Thread[] = [];

  ngOnInit() {
    this.threads = this.threadService.getThreads();
    this.subreddits = this.subredditService.getSubreddits();
  }

  goToSubreddit(subreddit: Subreddit) {
    this.router.navigate(['r', subreddit.name]);
  }
}
