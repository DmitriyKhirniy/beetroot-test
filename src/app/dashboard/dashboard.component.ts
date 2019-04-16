import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';
import { Meteor } from './dashboard.interface';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  meteorsList: Meteor[];

  constructor(private dashboardService: DashboardService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadMeteors();
  }

  private loadMeteors(): void {
    this.dashboardService.loadMeteors()
      .subscribe(
        (meteors: Meteor[]) => {
          this.meteorsList = meteors;
          this.cd.markForCheck();
        }
      );
  }
}
