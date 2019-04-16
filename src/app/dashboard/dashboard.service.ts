import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Meteor } from './dashboard.interface';

@Injectable()
export class DashboardService {

  constructor(private httpClient: HttpClient){}

  loadMeteors(): Observable<Meteor[]> {
    return this.httpClient.get<Meteor[]>('https://data.nasa.gov/resource/y77d-th95.json');
  }

}
