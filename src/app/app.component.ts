import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { FileloadService } from './fileload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileToUpload: File
  constructor(public fileloadService:FileloadService){}
  handleFileInput(event: any): void {
    if (!event.target.files.length) {
      return;
    }
    this.fileToUpload = event.target.files.item(0);}
    
    private uploadFile(): void {
        this.fileloadService.uploadFile(this.fileToUpload).subscribe(
          (res: any) => {
            console.log('upload succeeded');
          }
        );}
  
}
