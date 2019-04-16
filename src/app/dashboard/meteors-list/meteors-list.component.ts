import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Meteor } from '../dashboard.interface';
import { MeteorsListService } from './meteors-list.service';
import { MeteorItem } from './meteors-list.interface';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-meteor-list-component',
  templateUrl: './meteors-list.component.html',
  styleUrls: ['./meteor-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeteorsListComponent implements OnChanges {

  @Input() items: Meteor[];

  list: MeteorItem[];

  /*Copy of list*/
  adjustedList: MeteorItem[];

  selectedYears: string[];

  years: SelectItem[];

  moreFilter: string;

  showMessage = false;

  firstYear: string;

  constructor(private meteorsListService: MeteorsListService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['items'].currentValue) {
     this.initItems(changes['items'].currentValue);
    }
  }

  resetFilters(): void {
    this.selectedYears = [];
    this.showMessage = false;
    this.moreFilter = '';
    this.list = [...this.adjustedList];
  }

  filterByYear(): void {
    const year: string = this.firstYear;

    this.firstYear = null;
    this.showMessage = false;

    this.selectedYears = [year];
    this.applyFilters();
  }

  applyFilters(): void {
    let filteredSet = [...this.adjustedList];
    const moreFilterValue: number = Number(this.moreFilter);

    if (this.selectedYears && this.selectedYears.length) {
      filteredSet = filteredSet.filter(item => this.selectedYears.some((year => year === item._year)));
    }

    if (!Number.isNaN(Number(this.moreFilter))) {
      filteredSet = filteredSet.filter(item => item._mass > moreFilterValue);
    }

    if (!filteredSet.length) {
      this.showMessage = true;

      const yearItem: string = this.findSpecificYear(moreFilterValue);

      if (yearItem) {
        this.firstYear = yearItem;
      }
    }

    this.list = filteredSet;
  }

  trackBy(index: number, item: MeteorItem): string {
    return item.id;
  }

  private setFilterValues(): void {
    this.setYearValues();
  }

  private setYearValues(): void {
    const yearItems: string[] = this.meteorsListService.getUniqueYearsList(this.adjustedList);

    yearItems.sort();

    this.years = yearItems.map(item => ({
      label: item,
      value: item
    }));
  }

  private findSpecificYear(moreFilterValue: number): string {
    const items = this.adjustedList.filter(item => item._mass > moreFilterValue);
    const yearItem = this.years.find(year => items.some(item => item.year.includes(year.value)));

    return yearItem ? yearItem.value : null;
  }

  private initItems(items: Meteor[]): void {
    const list = this.meteorsListService.adaptList(items);

    this.adjustedList = list;
    this.list = list;
    this.setFilterValues();
  }

}
