import { Meteor } from '../dashboard.interface';

export interface MeteorItem extends Meteor {
  _year: string; /*Already parsed year*/
  _mass: number;
}
