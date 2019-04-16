import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { MeteorsListModule } from './meteors-list/meteors-list.module';

@NgModule({
  imports: [
    HttpClientModule,
    MeteorsListModule
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [
    DashboardService
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {}
