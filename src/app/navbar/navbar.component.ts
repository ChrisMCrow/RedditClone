import { Component, OnInit } from '@angular/core';
import { Subreddit } from '../models/subreddit.model';
import { SubredditService}  from '../subreddit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [SubredditService]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private subredditService: SubredditService) { }

  subreddits: Subreddit[] = [];

  ngOnInit() {
    this.subreddits = this.subredditService.getSubreddits();
  }

  goToSubreddit(subreddit: Subreddit) {
    this.router.navigate(['r', subreddit.name]);
  }

}
