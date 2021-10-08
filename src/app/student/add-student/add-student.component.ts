import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import {Router} from '@angular/router';
import { StudentPayload } from '../student-payload';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addStudentForm:any= FormGroup;
  studentPayload: StudentPayload;

  constructor(private formBuilder: FormBuilder, private studentService: StudentServiceService , private router:Router) {
    this.addStudentForm = this.formBuilder.group({
      studentName: '',
      studentEmail: '',
      name:'',
      fatherName:'',
      age:0,
      number:0,
      batch:'',
      passOutYear:0
    });
    this.studentPayload = {
      studentId:0,
      studentName: '',
      studentEmail: '',
      name:'',
      fatherName:'',
      age:0,
      number:0,
      batch:'',
      passOutYear:0
    };
   }

  ngOnInit(): void {
  }
  addStudent(){
    this.studentPayload.studentName= this.addStudentForm.get('studentName').value;
    this.studentPayload.studentEmail= this.addStudentForm.get('studentEmail').value;
    this.studentPayload.name= this.addStudentForm.get('name').value;
    this.studentPayload.fatherName= this.addStudentForm.get('fatherName').value;
    this.studentPayload.age= this.addStudentForm.get('age').value;
    this.studentPayload.number= this.addStudentForm.get('number').value;
    this.studentPayload.batch= this.addStudentForm.get('batch').value;
    this.studentPayload.passOutYear= this.addStudentForm.get('passOutYear').value;

    this.studentService.createStudent(this.studentPayload).subscribe(data => {
      console.log('Student Created Successfully');
      this.router.navigateByUrl('/studentList');
    }, error => {
      console.log('Student Creation Failed');
    });
  }
}
