import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
      MatButtonModule,
      MatNativeDateModule,
      MatInputModule,
      MatDatepickerModule,
      MatCardModule,
      MatSnackBarModule,
      MatSlideToggleModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatDialogModule,
      MatGridListModule,
      MatIconModule,
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatMenuModule,
      MatProgressSpinnerModule
} from '@angular/material';

const components = [
      CommonModule,
      MatButtonModule,
      MatNativeDateModule,
      MatInputModule,
      MatDatepickerModule,
      MatCardModule,
      MatSnackBarModule,
      MatSlideToggleModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatDialogModule,
      MatGridListModule,
      MatIconModule,
      MatSelectModule,
      MatOptionModule,
      MatCheckboxModule,
      MatMenuModule,
      MatProgressSpinnerModule
];

@NgModule({
  imports: [
    components
  ],
  exports: [
    components
  ]
})
export class MaterialComponentsModule { }
