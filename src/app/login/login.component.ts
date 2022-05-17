
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
          window.location.reload();
          window.location.href="http://localhost:4200/display-book";
         // window.location.href = "http://localhost:4200/login";
        }, (err) => {
          alert(err.error.message);
          this.toastr.error(err.error);
          window.location.reload();
        });


	  //    fetch(url).then(res=>res.text()).then(res=>{
    //   var type1=type;
		// var value=res;
		
    // if(value.includes("-1")){
    //   alert("First Register");
    //   window.location.reload();
    // }
    // else if(value.includes("-2"))
    // {
    //   alert("invalid credentials");
    //   window.location.reload();
    // }
    // else
    // {
    //  alert("logged in");
    //  localStorage.setItem("SESSION_ID",value);
    //  localStorage.setItem("SESSION_USER",JSON.stringify(type));
    //  this.val = localStorage.getItem("SESSION_USER");
    //  this.vals =JSON.parse(this.val);
    //  console.log(this.vals);
    //  console.log(localStorage.getItem("SESSION_ID"));
    //  window.location.reload();
    //  window.location.href="http://localhost:4200/display-book";
  

    // }
    
    // });
    
  }
}
}