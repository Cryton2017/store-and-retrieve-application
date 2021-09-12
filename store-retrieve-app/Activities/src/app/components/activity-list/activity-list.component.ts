import { Component, OnInit } from '@angular/core';
import { Activities } from 'src/app/models/activities.model';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})

export class ActivityListComponent implements OnInit {

  //Declare page variables:
  Activities?: Activities[];
  currentActivity: Activities = {};
  currentIndex = -1;
  title = '';

  constructor(private activityService: ActivitiesService) { }

  //When the page loads:
  ngOnInit(): void {
    this.retrieveActivities();
  }

  //Retrieve the list of activities from the datastore:
  retrieveActivities(): void {
    this.activityService.getAll()
      .subscribe(
        data => {
          this.Activities = data;
        },
        error => {
          console.log(error);
        });
  }

  //Refresh the activity list:
  refreshList(): void {
    this.retrieveActivities();
    this.currentActivity = {};
    this.currentIndex = -1;
  }

  //Set the active activity:
  setActiveActivity(activity: Activities, index: number): void {
    this.currentActivity = activity;
    this.currentIndex = index;
  }
  
  //Fetch another activity from the external API:
  fetchAnother(): void {
    this.activityService.fetchActivity()
      .subscribe(
        data => {
          console.log(data);
          this.storeFetch(data);
        },
        error => {
          console.log(error);
        });
  }

  //Store the fetched data:
  storeFetch(data: any): void {

    //Convert data types to match datastore:
    const Data = {
      Activity: String(data.activity),
      Type: String(data.type),
      Participants: String(data.participants),
      price: String(data.price),
      link: String(data.link),
      key: String(data.key),
      accessibility: String(data.accessibility)
    };

    //Insert the data:
    this.activityService.create(Data)
    .subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }

  //Remove the current activity:
  deleteActivity(): void {
    this.activityService.delete(this.currentActivity.id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

}
