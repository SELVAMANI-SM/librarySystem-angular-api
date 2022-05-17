import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

  }
  val!: any
  vals!: any
  name!: String;
  email!: String;
  password!: String;
  mobile!: number;
  type!: String;


  message: any[] = [];

  register() {
    //this.toastr.success("hi every one");
    this.validation(this.name, this.email, this.password, this.mobile, this.type);
  }
  validation(name: String, email: String, password: String, mobile: number, type: String) {
    event?.preventDefault();
    let count = 0;
    this.message = [];
    if (name == null || name.trim() == "") {
      console.log("invalid name");
      this.message.push("Invalid name");
    }
    else {
      count++;
    }
    if (!email.includes("@") || !email.includes(".")) {
      console.log("invalid email");
      this.message.push("Invalid email");
    }
    else {
      count++;
    }
    if (password.length < 8 || password.length > 16) {
      console.log("invalid password");
      this.message.push("Invalid password");
    }
    else {
      count++;

    }
    let mobileStr = "" + mobile;
    if (mobileStr.length <= 9 || mobileStr.length >= 11) {
      console.log("invaild mobile");
    }
    else {
      count++;
    }
    if (type == null) {
      console.log("invalid type");
    }
    else {
      count++;
    }
    if (count == 5) {

      if (type.includes("member")) {
        alert("hi");

        localStorage.setItem("SESSION_NAME", JSON.stringify(name));
        localStorage.setItem("SESSION_EMAIL", JSON.stringify(email));
        localStorage.setItem("SESSION_PASSWORD", JSON.stringify(password));
        localStorage.setItem("SESSION_TYPE", JSON.stringify(type));
        localStorage.setItem("SESSION_MOBILE", JSON.stringify(mobile));

        //  window.location.href="http://localhost:4200/memberregister";
        this.router.navigate(["memberregister"])


      }
      else {

        this.spinner.show();
        const userObj = {
          "name": name,
          "email": email,
          "password": password,
          "userType": type,
          "mobile": mobile,
          "fine": "0"
        }

        this.spinner.show();
        const url = "https://collegelibrarysystem.herokuapp.com/user/register";
        this.http.post(url, userObj).subscribe((res: any) => {
          this.spinner.hide();
          let value = res.message;
          console.log(value);
          alert(value);
          this.toastr.success(value);
          this.router.navigate(["login"])
         // window.location.href = "http://localhost:4200/login";
        }, (err) => {
          alert(err.error.message);
          this.toastr.error(err.error);
          window.location.reload();
        });
    



    }
  }
    

  
}
}
