import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../services/auth-guard.service';
import { AdminGuard } from '../services/admin-guard.service';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AdminComponent } from './admin/admin.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminHeroesComponent } from './admin-heroes/admin-heroes.component';


const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuard],
      children: [
        {
          path: '',
          children: [
            { path: 'add-page', component: AddPageComponent, canActivate: [AdminGuard] },
            { path: 'add-post', component: AddPostComponent, canActivate: [AdminGuard] },
            { path: 'add-hero', component: AddHeroComponent, canActivate: [AdminGuard] },
            { path: 'page-approval', component: AddPageComponent, canActivate: [AdminGuard] },
            { path: 'post-approval', component: AddPostComponent, canActivate: [AdminGuard] },
            { path: 'hero-approval', component: AddHeroComponent, canActivate: [AdminGuard] },
            { path: 'edit-page/:key', component: AddPageComponent, canActivate: [AdminGuard] },
            { path: 'edit-post/:key', component: AddPostComponent, canActivate: [AdminGuard] },
            { path: 'edit-hero/:key', component: AddHeroComponent, canActivate: [AdminGuard] },
            { path: 'pages', component: AdminPagesComponent, canActivate: [AdminGuard] },
            { path: 'posts', component: AdminPostsComponent, canActivate: [AdminGuard] },
            { path: 'heroes', component: AdminHeroesComponent, canActivate: [AdminGuard] },
            { path: '', component: AdminDashboardComponent }
          ]
        }
      ]
}


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
