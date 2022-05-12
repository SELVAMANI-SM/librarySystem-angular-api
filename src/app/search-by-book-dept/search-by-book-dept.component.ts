import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-by-book-dept',
  templateUrl: './search-by-book-dept.component.html',
  styleUrls: ['./search-by-book-dept.component.css']
})
export class SearchByBookDeptComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";

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
        const url="http://localhost:9050/book/findByDepartment/"+department;
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();
          this.value=res;
    
        this.none="block";
        },(err)=>
        {
          this.toastr.error(err.error.message);
        });
      }
    }

}
