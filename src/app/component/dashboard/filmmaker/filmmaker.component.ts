import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-filmmaker',
  templateUrl: './filmmaker.component.html',
  styleUrl: './filmmaker.component.css'
})
export class FilmmakerComponent implements OnInit{
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