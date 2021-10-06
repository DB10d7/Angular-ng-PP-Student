import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentServiceService } from '../student-service.service';



@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStudent: any;
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentServiceService) { }

  ngOnInit(): void {

    this.studentService.getList().subscribe((resp)=>{

      this.listStudent = resp;
      })

  }
  studentDetials(id:number) {
    this.router.navigate(['studentDetails',id]);
  }

}
