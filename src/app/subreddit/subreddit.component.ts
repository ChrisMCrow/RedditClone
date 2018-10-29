import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Subreddit } from '../models/subreddit.model';
import { Thread } from '../models/thread.model'
import { ThreadService } from '../thread.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subreddit',
  templateUrl: './subreddit.component.html',
  styleUrls: ['./subreddit.component.css'],
  providers: [ThreadService]
})
export class SubredditComponent implements OnInit {
  subredditName: string = null;
  constructor(private route: ActivatedRoute, private location: Location, private threadService: ThreadService, private router: Router) { }

  threads: Thread[] = [];

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.subredditName = (urlParameters['subredditName']);
      this.threads = this.threadService.getFilteredThreads(this.subredditName);
    });
  }
}
