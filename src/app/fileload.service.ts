import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileloadService {

  constructor(private http: HttpClient) { }

  uploadFile(file: File): Observable<any> {
    const fd: FormData = new FormData();
    fd.append('file', file, file.name);
    return this.http.post('http://localhost:9090/upload', fd);
  }
  
  
}
