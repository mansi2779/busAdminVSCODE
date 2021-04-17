import { Component, OnInit } from '@angular/core';
import { Bookings } from '../bookings';
import { BusRouteDetail } from '../bus-route-detail';

import { CrudAdminService } from '../crud-admin.service';

@Component({
  selector: 'app-busbooking',
  templateUrl: './busbooking.component.html',
  styleUrls: ['./busbooking.component.css']
})
export class BusbookingComponent implements OnInit {
bookings:Bookings[]=[];
buses:BusRouteDetail[]=[];
  constructor(public crudadminService:CrudAdminService) { }

  ngOnInit(){
    this.crudadminService.getBooking().subscribe((data: Bookings[])=>{
      this.bookings = data; })
  }

}
