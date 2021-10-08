import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup} from '@angular/forms';
import { StudentServiceService } from '../student-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { StudentPayload } from '../student-payload';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudentForm=new FormGroup({
    studentId: new FormControl(''),
    studentName: new FormControl(''),
    studentEmail: new FormControl(''),
    name: new FormControl(''),
    fatherName: new FormControl(''),
    age:new FormControl(''),
    number:new FormControl(''),
    batch: new FormControl(''),
    passOutYear: new FormControl('')
  })
  studentPayload:any= StudentPayload;
  constructor(private formBuilder: FormBuilder, private studentService: StudentServiceService , private router:Router,private route: ActivatedRoute) {
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
   
    this.studentService.studentDetails(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log("data is here",result);
      this.updateStudentForm.patchValue({
        studentId: result['studentId'],
        studentName: result['studentName'],
        studentEmail: result['studentEmail'],
        name:result['name'],
        fatherName: result['fatherName'],
        age: result['age'],
        number:result['number'],
        batch: result['batch'],
        passOutYear:result['passOutYear']
      });
    }); 
  }
  updateStudent(){
    this.studentService.updateStudent(this.updateStudentForm.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Student Updated Successfully");
      this.updateStudentForm.reset();
      this.router.navigateByUrl('/studentList');
    })
  }

/*  updateStudent(){
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
  setStudentData(){
    this.studentService.studentDetails(this.route.snapshot.params['id']).subscribe((result:any)=>{
      console.log("data is here",result);
      this.updateStudentForm.studentId= result['studentId'];
      this.updateStudentForm.studentName= result['studentName'];
      this.updateStudentForm.studentEmail=result['studentEmail'];
      this.updateStudentForm.name= result.name;
      this.updateStudentForm.fatherName= result.fatherName;
      this.updateStudentForm.age= result.age;
      this.updateStudentForm.number= result.number;
      this.updateStudentForm.batch= result.batch;
      this.updateStudentForm.passOutYear= result.passOutYear;
    })
  } */
 }

