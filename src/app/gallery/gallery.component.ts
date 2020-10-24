import { Component, OnInit } from '@angular/core';
import {ImageService } from '../image.service';
import { Iimage } from '../interfaces'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 
  public imgList2: Iimage[]; //Object of tye Iimage[] to store incoming image data observable
  imgActive=false;  //Boolean value to indicate wheather main img display is active or not
  activeImage;  //object to store the image to be displayed on main display portion

  constructor(private imageService: ImageService) {}

  imgSelected(i): void {  //method invoked when ith image is clicked. Passes the image object as argument
    this.imgActive=true;  //to activate main display
    this.activeImage=i;   //setting the image to be displayed in main display

  }
  ngOnInit(): void {  //method invoked when component initialised to retrieve all images from DB    
    this.imageService.getImages().subscribe((images: Iimage[])=>{this.imgList2=images;
    console.log(this.imgList2);}); 
  }  

}
