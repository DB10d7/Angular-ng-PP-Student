import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import {Router} from '@angular/router';
import { StudentPayload } from '../student-payload';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudentForm:any= FormGroup;
  studentPayload:any= StudentPayload;
  constructor(private formBuilder: FormBuilder, private studentService: StudentServiceService , private router:Router) {
    this.updateStudentForm = this.formBuilder.group({
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

  updateStudent(){
    this.studentPayload.studentName= this.updateStudentForm.get('studentName').value;
    this.studentPayload.studentEmail= this.updateStudentForm.get('studentEmail').value;
    this.studentPayload.name= this.updateStudentForm.get('name').value;
    this.studentPayload.fatherName= this.updateStudentForm.get('fatherName').value;
    this.studentPayload.age= this.updateStudentForm.get('age').value;
    this.studentPayload.number= this.updateStudentForm.get('number').value;
    this.studentPayload.batch= this.updateStudentForm.get('batch').value;
    this.studentPayload.passOutYear= this.updateStudentForm.get('passOutYear').value;

    this.studentService.updateStudent(this.studentPayload).subscribe(data => {
      console.log('Student Created Successfully');
      this.router.navigateByUrl('/home');
    }, error => {
      console.log('Student Creation Failed');
    });
  }
}
