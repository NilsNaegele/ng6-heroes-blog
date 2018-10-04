import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../post.service';
import { GlobalService } from '../../services/global.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  searchTerm: string;

  constructor(private postService: PostService,
              private globalService: GlobalService,
              private router: Router) {
                this.globalService.searchTerm.subscribe((term) => {
                  this.searchTerm = term;
                });
              }

  ngOnInit() {
    this.getPosts();
    if (this.router.url.includes('blog')) {
      this.globalService.searchTerm.next('');
    }
  }

  getPosts() {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  getPostImage(post: Post) {
    if (post.imageURL) {
      return post.imageURL;
    } else {
      return '../../../assets/images/placeholder.jpeg';
    }
  }

}
