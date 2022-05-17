import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletebookdept',
  templateUrl: './deletebookdept.component.html',
  styleUrls: ['./deletebookdept.component.css']
})
export class DeletebookdeptComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }

 
  ngOnInit(): void {
  }
 
  department!:String;
    Department()
    {
      this.validation(this.department);
    }
    validation(department:String)
    {
      event?.preventDefault();
      let count=0;
      if(department==null||department.trim()=="")
      {
        console.log("invalid");
      }
      else{
        count++;
      }
      if(count==1)
      {
       this.spinner.show();
        const url="https://collegelibrarysystem.herokuapp.com/book/deleteByDepartment/"+department;
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();
          let value=res.message;
          this.toaster.success(value);
          window.location.reload();
        },(err)=>
        {
            this.toaster.error(err.error.message);
            window.location.reload();
        });
        

      }
    }

}
