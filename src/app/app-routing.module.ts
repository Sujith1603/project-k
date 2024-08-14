import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/dashboard/home/home.component';

import { FilmmakerComponent } from './component/dashboard/filmmaker/filmmaker.component';
import { LoginComponent } from './component/dashboard/login/login.component';
import { ImageSliderComponent } from './component/dashboard/image-slider/image-slider.component';
import { SignupComponent } from './component/dashboard/signup/signup.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';
import { ConnectionComponent } from './component/dashboard/connection/connection.component';
import { DopComponent } from './component/dashboard/dop/dop.component';
import { ScreenwriterComponent } from './component/dashboard/screenwriter/screenwriter.component';
import { UploadfileComponent } from './component/dashboard/uploadfile/uploadfile.component';
import { DirprofileComponent } from './component/dashboard/dirprofile/dirprofile.component';
import { Dirprofile1Component } from './component/dashboard/dirprofile1/dirprofile1.component';


const routes: Routes = [
  {path : 'dashboard', children: [
    {path: '', component :HomeComponent},
    {path: 'filmmaker', component :FilmmakerComponent},
    {path: 'login', component :LoginComponent},
    {path: 'imageslider', component :ImageSliderComponent},
    {path: 'signup', component :SignupComponent},
    {path: 'profile', component :ProfileComponent},
    {path: 'connection', component :ConnectionComponent},
    {path: 'dop', component :DopComponent},
    {path: 'screenwriter', component :ScreenwriterComponent},
    {path: 'uploadfile', component :UploadfileComponent},
    {path: 'dirprofile/:id', component :DirprofileComponent},
    {path: 'dirprofile1/:id', component :Dirprofile1Component},






  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
