import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from '../service/comment.service';
import { Comment } from '../models/comment';

@Component({
  selector: 'app-comment-basic',
  templateUrl: './comment-basic.component.html',
  styleUrls: ['./comment-basic.component.css']
})
export class CommentBasicComponent implements OnInit {
  @Input() comment: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
