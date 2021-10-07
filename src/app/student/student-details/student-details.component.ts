import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  studentDetail: any;
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentServiceService) { }

  ngOnInit(): void {
    this.studentDetails();
  }

  studentDetails(){
    this.studentService.studentDetails(this.route.snapshot.params['id']).subscribe((result)=>{
      console.log("data is here",result);
      this.studentDetail= result;
      console.log(this.studentDetail);
    })
  }

}
