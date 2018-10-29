import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../models/thread.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ThreadService]
})
export class FrontPageComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  threads: FirebaseListObservable<any[]>;

  ngOnInit() {
    this.threads = this.threadService.getThreads();
  }

}
