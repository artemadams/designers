import { Component, OnInit, Input } from '@angular/core';
import { Opinion } from '../../models/Opinion';
import { Artist } from '../../models/Artist';
import { ArtistId } from '../../models/ArtistId';
import { Rating } from '../../models/Rating';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() artist: Artist;
  @Input() comments: Opinion[];
  rating: Rating;

  constructor() {}

  ngOnInit(): void {}
}
