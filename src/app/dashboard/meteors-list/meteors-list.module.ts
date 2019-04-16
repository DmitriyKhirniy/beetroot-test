import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MeteorsListComponent } from './meteors-list.component';
import { MeteorsListService } from './meteors-list.service';

import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    MultiSelectModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    MeteorsListComponent
  ],
  providers: [
    MeteorsListService
  ],
  exports: [
    MeteorsListComponent
  ]
})
export class MeteorsListModule {}
