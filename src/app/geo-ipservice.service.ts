import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GeoIPServiceService {

  constructor(private http:HttpClient) { }
  BasePath:string="http://api.ipstack.com/";
  access_key:string="04d5137a6a330512341a47b355995cf6";
  
  GetGeoIPinformatiom(IpAddress:string)
  {
    let ApiPath=this.BasePath;
    ApiPath+=IpAddress+"?access_key="+this.access_key;;
    
    return this.http.get(ApiPath);
  }
}
