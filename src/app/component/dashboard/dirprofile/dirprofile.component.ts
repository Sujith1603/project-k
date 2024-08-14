import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dirprofile',
  templateUrl: './dirprofile.component.html',
  styleUrls: ['./dirprofile.component.css']
})
export class DirprofileComponent implements OnInit {
  director: any;
  directorId: any;
constructor(private service:ProfileService,private activatedroute:ActivatedRoute){

}
ngOnInit(): void {
    this.directorId=this.activatedroute.snapshot.params['id'];
    this.director=this.service.directors.find(x =>x.id===this.directorId);
}
}