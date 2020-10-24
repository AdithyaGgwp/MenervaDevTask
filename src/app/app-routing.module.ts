import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"upload", component: UploadComponent},  
  {path:"gallery", component: GalleryComponent},
  {path: '', pathMatch: 'full', redirectTo: 'gallery'},
  {path:'**', pathMatch: 'full', redirectTo: 'gallery'} //Redirect to gallery in case of null path or invalid path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GalleryComponent, UploadComponent]
