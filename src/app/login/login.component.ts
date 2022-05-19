
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
   
  }
  email!:String;
  password!:String;
  type!:any;
  val!:any 
  vals!:any

  login()
  {
    this.validation(this.email,this.password);
  }
  validation(email:String,password:String)
  {
    event?.preventDefault();
    let count=0;
   
    if(email==null||email.trim()=="")
    {
      console.log("invalid email");
    }
    else{
      count++;
    }
    if(password==null||password.trim()=="")
    {
      console.log("invalid password");
    }
    else{
      count++;
    }
  
    if(count==2)
    {
      const userObj={
        "email":email,
        "password":password
      
      }
      
      const url="https://collegelibrarysystem.herokuapp.com/user/login";
         this.http.post(url,userObj).subscribe((res: any) => {
          this.spinner.hide();
          let value = res.number;
          let type =res.type;
        

          this.toastr.success("logged in");
         
          localStorage.setItem("SESSION_ID",value);
          localStorage.setItem("SESSION_USER",JSON.stringify(type));
         
          this.router.navigate(["display-book"]);
          
        }, (err) => {
          alert(err.error.message);
          this.toastr.error(err.error);
          window.location.reload();
        });

    
  }
}
}