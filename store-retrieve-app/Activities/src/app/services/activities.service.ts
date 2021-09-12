import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activities } from '../models/activities.model';

//Declare the URLs for teh APIs:
const activitiesAPI = 'https://localhost:5001/api/activities';
const activitiesStore = 'http://www.boredapi.com/api/activity/';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  constructor(private http: HttpClient) { }

  //Get all the activities:
  getAll(): Observable<Activities[]> {
    return this.http.get<Activities[]>(activitiesAPI);
  }

  //Get a specific activity:
  get(id: any): Observable<Activities> {
    return this.http.get(`${activitiesAPI}/${id}`);
  }

  //Add a new activity to the datastore:
  create(data: any): Observable<any> {
    return this.http.post(activitiesAPI, data);
  }

  //Delete an activity:
  delete(id: any): Observable<any> {
    return this.http.delete(`${activitiesAPI}/${id}`);
  }

  //Fetch an activity from the external API:
  fetchActivity(): Observable<any> {
    return this.http.get(activitiesStore);
  }
}
