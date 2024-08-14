import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DopprofileService } from '../dopprofile.service';

@Component({
  selector: 'app-dop',
  templateUrl: './dop.component.html',
  styleUrl: './dop.component.css'
})
export class DopComponent implements OnInit{
  constructor(private route:ActivatedRoute, private service:DopprofileService) {}
  dop: any[] | undefined ;

  ngOnInit(): void {
    this.dop=this.service.cameramen;
      
  } dops: any[] = [
    {id:'1', Cameraman: 'Santosh Sivan' ,profile:'view profile', connect:'uploadfile' },
    { id:'2',Cameraman: 'P.C. Sreeram ' ,profile:'view profile', connect:'uploadfile' },
    { id:'3',Cameraman: 'Sujith Vasudev' ,profile:'view profile', connect:'uploadfile' },
    {id:'4', Cameraman: 'senthil kumar' ,profile:'view profile', connect:'uploadfile' },
    { id:'5',Cameraman: 'P.s. Vinod' ,profile:'view profile', connect:'uploadfile' },
  ];

}
