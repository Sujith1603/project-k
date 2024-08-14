 import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-image-slider',
   templateUrl: './image-slider.component.html',
   styleUrls: ['./image-slider.component.css']
 })
 export class ImageSliderComponent implements OnInit {
   images: string[] = ['assets/image.png', 'assets/20.jpeg', '']; 
   currentIndex = 0;
   slideWidth: number =1000; 
   imageWidth: number = 1000; 
   imageHeight: number = 400; 
   ngOnInit(): void {
     this.slideWidth = window.innerWidth;
   }
   prev(): void {
     this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
   }

   next(): void {
     this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
   }
 }
