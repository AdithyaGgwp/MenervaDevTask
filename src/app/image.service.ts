import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iimage } from './interfaces';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImageService {  
  private url: string = 'http://localhost:5000/api'

  constructor(private http: HttpClient) { }

  
  getImages(): Observable<Iimage[]>{    //Service method for getting all the images from database
    return this.http.get<Iimage[]>(this.url + "/imglist");      // api/imglist for getting data from db          
  }

  postImage(formData): void{      //Service method to upload a single image with details from user
    this.http.post(this.url+"/uploadimage", formData)     // api/uploadimage for posting data to db
      .subscribe((response) => {
      alert("Uploaded");
      console.log('response received is ', response);
    })
  }
}
