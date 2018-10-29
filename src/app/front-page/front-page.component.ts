import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';
import { Thread } from '../models/thread.model';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [ThreadService]
})
export class FrontPageComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  threads: Thread[] = [];

  ngOnInit() {
    this.threads = this.threadService.getThreads();
  }

}
