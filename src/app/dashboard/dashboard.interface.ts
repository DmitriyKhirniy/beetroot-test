import { MeteorCoordinates } from './dashboard.types';

export interface MeteorGeolocaion {
  type: string;
  coordinates: MeteorCoordinates;
}

export interface Meteor {
  fall: string;
  geolocation: MeteorGeolocaion;
  id: string;
  mass: string;
  name: string;
  nametype: string;
  recclass: string;
  reclat: string;
  reclong: string;
  year: string;
}
