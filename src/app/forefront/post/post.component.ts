import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../../models/post';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private postService: PostService) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.postService.getPost(id).subscribe(post => {
      this.post = post;
    });
  }

  goBack() {
    this.location.back();
  }

}
