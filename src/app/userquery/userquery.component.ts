import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-userquery',
  templateUrl: './userquery.component.html',
  styleUrls: ['./userquery.component.css']
})
export class UserqueryComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";

  name!:String;
  profile!:any
  
  Nameid()
  {
    this.validation(this.name);
  }
  validation(name:String)
  {
    event?.preventDefault();
    let count=0;
    if(name==null||name.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      this.spinner.show();
      this.profile=localStorage.getItem("SESSION_ID");
      
      const url="https://collegelibrarysystem.herokuapp.com/user/query?userId="+this.profile+"&userQuery="+name;

      this.http.get(url).subscribe((res:any)=>
      {
        this.spinner.hide();
        this.value=res.message;
      this.toaster.success(this.value);
	      this.none="block";
        window.location.reload();
      },(err)=>
      {
          this.toaster.error(err.error.message);
          window.location.reload();
      });
      
    
  }

}

}
