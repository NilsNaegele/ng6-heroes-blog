import { Component, OnInit } from '@angular/core';

import { Post } from '../../models/post';
import { PostService } from '../../post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
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
