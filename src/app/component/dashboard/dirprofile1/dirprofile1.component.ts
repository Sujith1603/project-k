import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DopprofileService } from '../dopprofile.service';

@Component({
  selector: 'app-dirprofile1',
  templateUrl: './dirprofile1.component.html',
  styleUrl: './dirprofile1.component.css'
})
export class Dirprofile1Component implements OnInit {
  dop: any;
  dopId:any;
  constructor(private route: ActivatedRoute, private service: DopprofileService){}
  ngOnInit(): void {
    this.dopId=this.route.snapshot.params['id'];
    this.dop=this.service.cameramen.find(x =>x.id===this.dopId);
  }

}
