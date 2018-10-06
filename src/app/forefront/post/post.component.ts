import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

import { AngularFireDatabase } from 'angularfire2/database';

import { Location } from '@angular/common';
import { Post } from '../../models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: any;
  postContent: any;

  constructor(private db: AngularFireDatabase,
              private route: ActivatedRoute,
              private location: Location,
              private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postContent = this.db.list('/posts', ref => ref.orderByChild('id').equalTo(id));
    this.postContent.valueChanges().subscribe((p) => {
      if (p[0].published) {
        this.post = p[0];
        this.title.setTitle(this.post.title);
        this.meta.updateTag({ content: 'View ' + this.post.title }, 'name=\'description\'');
      } else {
        this.post = {
          title: 'Post not found',
          description: ''
        };
      }

    });
  }

  goBack() {
    this.location.back();
  }

}
