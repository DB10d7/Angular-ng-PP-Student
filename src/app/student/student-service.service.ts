import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentPayload } from './student-payload';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  private url="http://localhost:8080/api/student/"
  constructor(private http: HttpClient) { }

  createStudent(studentPayload: StudentPayload): Observable<any> {
    return this.http.post('http://localhost:8080/api/student/create', studentPayload);
  }
  getList(){
    console.log(this.http.get(this.url + "all"));
    return this.http.get<any>(this.url + "all");
  }
  updateStudent(studentPayload: StudentPayload): Observable<any> {
    return this.http.put('http://localhost:8080/api/student/update', studentPayload);
  }
  studentDetails(id:number){
    console.log(this.http.get("http://localhost:8080/api/student/get/"+id));
    return this.http.get<any>("http://localhost:8080/api/student/get/"+id);
  }
  deleteStudent(id:number): Observable<any>{
    return this.http.delete("http://localhost:8080/api/student/delete/"+id);
  }
  
}
