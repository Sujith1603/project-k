import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material/material.module';
import { environment } from '../environments/environment.development';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilmmakerComponent } from './component/dashboard/filmmaker/filmmaker.component';
import { ImageSliderComponent } from './component/dashboard/image-slider/image-slider.component';
import { LoginComponent } from './component/dashboard/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/dashboard/home/home.component';
import { SignupComponent } from './component/dashboard/signup/signup.component';
import { ProfileComponent } from './component/dashboard/profile/profile.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/dashboard/footer/footer.component';
import { ConnectionComponent } from './component/dashboard/connection/connection.component';
import { DopComponent } from './component/dashboard/dop/dop.component';
import { ScreenwriterComponent } from './component/dashboard/screenwriter/screenwriter.component';
import { UploadfileComponent } from './component/dashboard/uploadfile/uploadfile.component';
import { DirprofileComponent } from './component/dashboard/dirprofile/dirprofile.component';
import { Dirprofile1Component } from './component/dashboard/dirprofile1/dirprofile1.component';
import { Dirprofile2Component } from './component/dashboard/dirprofile2/dirprofile2.component';
import { Dirprofile3Component } from './component/dashboard/dirprofile3/dirprofile3.component';
import { Dirprofile4Component } from './component/dashboard/dirprofile4/dirprofile4.component';
import { ProfileService } from './component/dashboard/profile.service';
import { DopprofileService } from './component/dashboard/dopprofile.service';
import { Elem1Component } from './dashboard/elem1/elem1.component';
import { Elem2Component } from './dashboard/elem2/elem2.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmmakerComponent,
    ImageSliderComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    FooterComponent,
    ConnectionComponent,
    DopComponent,
    ScreenwriterComponent,
    UploadfileComponent,
    DirprofileComponent,
    Dirprofile1Component,
    Dirprofile2Component,
    Dirprofile3Component,
    Dirprofile4Component,
    Elem1Component,
    Elem2Component,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule ,
    HttpClientModule
    
  ],
  providers: [
    provideAnimationsAsync(),UserService,ProfileService,DopprofileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
