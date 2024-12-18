import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

// for developement use
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// for production use
// import { environment } from '../../environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private apiUrl = environment.url; // Node.js API URL
  private postDataSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient, private router: Router) { }

  forLoginPostApi(data: any, postUrl: any): Observable<any> {
    const url = `${this.apiUrl}${postUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, data, { headers }).pipe(
      tap(response => {
        // localStorage.setItem('token', response.token);
        // const expiresAt = new Date();
        // expiresAt.setMinutes(expiresAt.getMinutes() + 2); // Token expires in 1 hour
        // localStorage.setItem('expiresAt', expiresAt.toISOString());
        this.postDataSubject.next(response);
      })
    );
  }

  forPostApi(data: any, postUrl: any): Observable<any> {
    const url = `${this.apiUrl}${postUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(url, data, { headers }).pipe(
      tap(response => this.postDataSubject.next(response))
    );
  }

  forGetApi(getUrl: any): Observable<any> {
    const url = `${this.apiUrl}${getUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(url, { headers });
  }

  forGetDataApiById(getUrl: any): Observable<any> {
    const url = `${this.apiUrl}${getUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(url, { headers });
  }

  forUpdateDataApiById(data: any, getUrl: any): Observable<any> {
    const url = `${this.apiUrl}${getUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(url, data, { headers });
  }

  forDeleteDataApiById(getUrl: any): Observable<any> {
    const url = `${this.apiUrl}${getUrl}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete<any>(url, { headers });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
    this.router.navigate(['/authentication']);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const expiresAt = localStorage.getItem('expiresAt');
    if (token && expiresAt) {
      return new Date() < new Date(expiresAt);
    }
    return false;
  }

  checkTokenExpiry() {
    const expiresAt = localStorage.getItem('expiresAt');
    if (expiresAt && new Date() > new Date(expiresAt)) {
      this.logout();
    }
  }

  uploadFile(file: File, type: any, getUrl: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    const url = `${this.apiUrl}${getUrl}?fieldName=${encodeURIComponent(type)}`;
    return this.http.post<any>(url, formData)
  }

  getFileByURL(getUrl: any) {
    const url = `${this.apiUrl}/${getUrl}`;
    return url;
  }

  extractFileURLByURL(getUrl: any) {
    const filePath = getUrl.replace(this.apiUrl, '');
    return filePath;
  }

  deleteFileByURL(getUrl: string, filePath:any): Observable<any> {
    const url = `${this.apiUrl}${getUrl}`;
    return this.http.delete<any>(url, { body: { filePath } });
  }

}
