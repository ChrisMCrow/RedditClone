import { Component, OnInit } from '@angular/core';
import { Thread } from '../models/thread.model';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [ThreadService]
})

export class CreatePostComponent implements OnInit {

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
  }
  
  submitForm(subreddit: string, title: string, text: string) {
    let newThread: Thread = new Thread(subreddit, title, text);
    this.threadService.addThread(newThread);
  }
}
