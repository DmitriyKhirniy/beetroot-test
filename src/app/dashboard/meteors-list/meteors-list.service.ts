import { Injectable } from '@angular/core';

import { Meteor } from '../dashboard.interface';
import { MeteorItem } from './meteors-list.interface';

@Injectable()
export class MeteorsListService {

  adaptList(list: Meteor[]): MeteorItem[] {
    return list.map(item => {
      return {
        ...item,
        _year: this.parseYear(item),
        _mass: Number(item.mass)
      } as MeteorItem;
    });
  }

  getUniqueYearsList(items: MeteorItem[]): string[] {
    const list: string[] = items
      .map(item => item._year)
      .filter(item => !!item);

    return Array.from<string>(new Set(list));
  }

  private parseYear(item: Meteor): string | null {
    return item.year ? item.year.substr(0, item.year.indexOf('-')) : null;
  }
}
