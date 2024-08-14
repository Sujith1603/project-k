import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
user: any;
  id!: string;
    name!: string;
    email!: string;
    bio!: string;
    avatar!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.getUser();

   
  }
  getUser(){
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
    },
    (error) => {
      console.error('Error fetching students:', error);
    }
    );
  }
 
}
