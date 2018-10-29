import { Component, OnInit, Input } from '@angular/core';
import { Thread } from '../models/thread.model';

@Component({
  selector: 'app-thread-details',
  templateUrl: './thread-details.component.html',
  styleUrls: ['./thread-details.component.css']
})
export class ThreadDetailsComponent implements OnInit {
  @Input() thread: Thread;

  
  constructor() { }
  
  ngOnInit() {
  }

}
