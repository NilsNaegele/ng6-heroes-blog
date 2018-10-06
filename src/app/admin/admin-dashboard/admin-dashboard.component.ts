import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  posts: Observable<any[]>;
  pages: Observable<any[]>;
  heroes: Observable<any[]>;
  approvals: Observable<any[]>;
  approvalsTotal: number;
  postsLength: number;
  pagesLength: number;
  currentAdmin: any;
  columns: any;

  constructor(private db: AngularFireDatabase,
              private globalService: GlobalService) {
                this.posts = this.db.object('/posts').valueChanges();
                this.pages = this.db.object('/pages').valueChanges();
                this.heroes = this.db.object('/heroes').valueChanges();
                this.approvals = this.db.object('/approvals').valueChanges();

                this.posts.subscribe((p) => {
                  this.postsLength = p.length;
                });

                this.pages.subscribe((p) => {
                  this.pagesLength = p.length;
                });

                this.columns = 3;
                this.approvalsTotal = 0;

                this.globalService.admin.subscribe((admin) => {
                  this.currentAdmin = admin;
                });

              }

  ngOnInit() {
    this.approvals.subscribe((a: any) => {
      if (a && a.heroes) {
        this.approvalsTotal += Object.keys(a.heroes).length;
      }
      if (a && a.pages) {
        this.approvalsTotal += Object.keys(a.pages).length;
      }
      if (a && a.posts) {
        this.approvalsTotal += Object.keys(a.posts).length;
      }
    });
  }

  onResize(event) {
    const element = event.target.innerWidth;

    if (element < 950) {
      this.columns = 2;
    }

    if (element > 950) {
      this.columns = 3;
    }

    if (element < 750) {
      this.columns = 1;
    }
  }

}
