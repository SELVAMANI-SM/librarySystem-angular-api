import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-memberregister',
  templateUrl: './memberregister.component.html',
  styleUrls: ['./memberregister.component.css']
})
export class MemberregisterComponent implements OnInit {



  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }
  number1!: any;
  amount!: any;
  names!: any;
  name!: any;
  mobile!: any;
  mobiles!: any;
  passwords!: any;
  password!: any;
  types!: any;
  type!: any;
  email!: any;
  emails!: any;
  payment() {
    this.validation(this.number1, this.amount);
  }
  validation(number1: number, amount: number) {
    event?.preventDefault();



    console.log(number1);
    console.log(amount);

    let count = 0;
    let num = "" + number1;
    if (num.length <= 15 || num.length >= 17) {

      console.log("invalid");
    }
    else {
      count++;
    }

    if (!(amount == 150)) {

      console.log("invalid amount");
    }
    else {
      count++;
    }
    if (count == 2) {
      alert("fine");

      this.names = localStorage.getItem("SESSION_NAME");
      this.name = JSON.parse(this.names);
      this.emails = localStorage.getItem("SESSION_EMAIL");
      this.email = JSON.parse(this.emails);
      this.passwords = localStorage.getItem("SESSION_PASSWORD");
      this.password = JSON.parse(this.passwords);
      this.types = localStorage.getItem("SESSION_TYPE");
      this.type = JSON.parse(this.types);
      this.mobiles = localStorage.getItem("SESSION_MOBILE");
      this.mobile = JSON.parse(this.mobiles);

      const userObj = {
        "name": this.name,
        "email": this.email,
        "password": this.password,
        "userType": this.type,
        "mobile": this.mobile,
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
