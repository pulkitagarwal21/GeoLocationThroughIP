import { Component, OnInit } from '@angular/core';
import { GeoIPServiceService } from '../geo-ipservice.service';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.component.html',
  styleUrls: ['./geo-location.component.scss']
})
export class GeoLocationComponent implements OnInit {
  IpAddress:string;
  constructor(private geoIPServiceService:GeoIPServiceService) { }
  GeoLocationDetails:any;
  InvalidIP:boolean=false;
  ngOnInit() {
  }

  GetGeoIPDetails()
  {
    this.geoIPServiceService.GetGeoIPinformatiom(this.IpAddress)
    .subscribe((res: any) => {  
      debugger;
      this.GeoLocationDetails=res;
      if(this.GeoLocationDetails.latitude==null)
      {
        this.GeoLocationDetails=null;
        this.InvalidIP=true;
      }
      else{
        this.InvalidIP=false;
      }
      console.log(this.GeoLocationDetails);
    }
    );
  }
  isObject(val) { return typeof val === 'object'; }
}
