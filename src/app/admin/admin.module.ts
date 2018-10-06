import { MaterialComponentsModule } from './../material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CKEditorModule } from 'ng2-ckeditor';
import { DndModule } from 'ng2-dnd';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './admin-posts/admin-posts.component';
import { AdminPagesComponent } from './admin-pages/admin-pages.component';
import { AdminHeroesComponent } from './admin-heroes/admin-heroes.component';
import { AddPostComponent } from './add-post/add-post.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MaterialComponentsModule,
    SharedModule,
    CKEditorModule,
    DndModule.forRoot()
  ],
  declarations: [AdminDashboardComponent, AdminPostsComponent, AdminPagesComponent,
                 AdminHeroesComponent, AddPostComponent, AddHeroComponent,
                 AddPageComponent, AdminComponent]
})
export class AdminModule { }
