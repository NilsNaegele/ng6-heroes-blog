import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialComponentsModule } from './material-components.module';

import { SearchPipe } from './pipes/search.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';


const pipes = [
    SearchPipe,
    SafeHtmlPipe,
    SortPipe,
    TruncatePipe
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialComponentsModule
    ],
    declarations: [ ...pipes ],
    exports: [
        ...pipes,
        RouterModule
    ]
})
export class SharedModule {}
