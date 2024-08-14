import { Component } from '@angular/core';
import { UploadfileService } from '../uploadfile.service';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  constructor(private uploadfileService: UploadfileService) { }

  onFileSelected(event: Event) {
    const file: File = (event.target as HTMLInputElement).files![0];
    const formData = new FormData();
    formData.append('file', file);

    this.uploadfileService.uploadFile(formData).subscribe(
      (response) => {
        console.log('File uploaded successfully:', response);
      },
      (error) => {
        console.error('Error uploading file:', error);
      }
    );
  }
}
