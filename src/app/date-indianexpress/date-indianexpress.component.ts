import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date-indianexpress',
  templateUrl: './date-indianexpress.component.html',
  styleUrls: ['./date-indianexpress.component.css']
})
export class DateIndianexpressComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  dateindian!: String;
  value!: any
  date!: any
  none = "none";
  dateIndian() {
    this.validation(this.dateindian);
  }
  validation(dateindian: String) {
    event?.preventDefault();
    let count = 0;
    if (dateindian == null || dateindian.trim() == "") {
      console.log("invalid");
    }
    else {
      count++;
    }
    if (count == 1) {
      this.spinner.show();
      const url = "http://localhost:9050/news/IndianExpressByDate/" + dateindian;
  
        this.http.get(url).subscribe((res: any) => {
          this.spinner.hide();
          this.value = res;
          this.none = "block"
        }, (err) => {
          this.toaster.error(err.error.message);
          window.location.reload();

        });
      }
    }

  }



