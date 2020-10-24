import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  public uploadedFile: Array<File>;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFileChange(source): void {    //invoked when user uploads a file
    this.uploadedFile=source.target.files;    //this method stores uploaded file in uploadedFile object
  }

  onSubmit(title,description){  //Method invoked when form is submitted
    let formData = new FormData();
    formData.append("image",this.uploadedFile[0]);
    formData.append("imagename",this.uploadedFile[0].name);    
    formData.append("title",title.value);             //Constructing a FormData object 
    formData.append("description",description.value); //by appending key-value pairs
    this.imageService.postImage(formData);            //passing the FormData object to service for api call
  
  }

}
