import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AddPageComponent } from './add-page/add-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminHeroesComponent } from './admin-heroes/admin-heroes.component';


const routes: Routes = [
  { path: '', component: AdminComponent,
      children: [
        {
          path: '',
          children: [
            { path: 'add-page', component: AddPageComponent },
            { path: 'add- post', component: AddPostComponent },
            { path: 'add-hero', component: AddHeroComponent },
            { path: 'page-approval', component: AddPageComponent },
            { path: 'post-approval', component: AddPostComponent },
            { path: 'hero-approval', component: AddHeroComponent },
            { path: 'edit-page/:key', component: AddPageComponent },
            { path: 'edit-post/:key', component: AddPostComponent },
            { path: 'edit-hero/:key', component: AddHeroComponent },
            { path: 'pages', component: AdminPagesComponent },
            { path: 'posts', component: AdminPostsComponent },
            { path: 'heroes', component: AdminHeroesComponent },
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
