import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  header = 'ng6-heroes-blog';

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('About');
    this.meta.updateTag({ content: 'View about page'}, 'name=\'description\'');
  }

}
