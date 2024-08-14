import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-screenwriter',
  templateUrl: './screenwriter.component.html',
  styleUrl: './screenwriter.component.css'
})
export class ScreenwriterComponent implements OnInit{
  director!: any[] ;

  constructor(private route:ActivatedRoute,private service:ProfileService) {}
  
  ngOnInit(): void {
    this.director = this.service.directors;
  }
  directo:any[]=  [
    { id:'1',Director: 'S.S.Rajamouli' ,profile:'view profile', connect:'uploadfile' },
    { id:'2',Director: 'Christopher Nolan ' ,profile:'view profile', connect:'uploadfile' },
    { id:'3',Director: 'Sukumar' ,profile:'view profile', connect:'uploadfile' },
    { id:'4',Director: 'Tharun Bhaskar' ,profile:'view profile', connect:'uploadfile' },
    { id:'5',Director: 'Prasanth Varma' ,profile:'view profile', connect:'uploadfile' },
  ];
  
 


 
 



  }

