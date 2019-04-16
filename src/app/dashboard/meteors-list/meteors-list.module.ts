import { NgModule } from '@angular/core';
import { MeteorsListComponent } from './meteors-list.component';
import { CommonModule } from '@angular/common';

import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeteorsListService } from './meteors-list.service';

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
