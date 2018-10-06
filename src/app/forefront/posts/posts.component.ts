import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { AngularFireDatabase } from 'angularfire2/database';

import { Post } from '../../models/post';
import { GlobalService } from '../../services/global.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Observable<any[]>;
  searchTerm: string;

  constructor(
              private db: AngularFireDatabase,
              private globalService: GlobalService,
              private router: Router,
              private title: Title,
              private meta: Meta) {
                this.posts = this.db.list('/posts',
                    ref => ref.limitToLast(20)).valueChanges();
                this.globalService.searchTerm.subscribe((term) => {
                  this.searchTerm = term;
                });
              }

  ngOnInit() {
    this.title.setTitle('Blog');
    this.meta.updateTag({ content: 'View recent blog posts'}, 'name=\'description\'');
    if (this.router.url.includes('blog')) {
      this.globalService.searchTerm.next('');
    }
  }

  getPostImage(post: Post) {
    if (post.imageURL) {
      return post.imageURL;
    } else {
      return '../../../assets/images/placeholder.jpeg';
    }
  }

}
