import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletenewspaper',
  templateUrl: './deletenewspaper.component.html',
  styleUrls: ['./deletenewspaper.component.css']
})
export class DeletenewspaperComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private toaster:ToastrService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  before!: String;
  after!: String;
  value!: any;
  date!: any;
  none = "none";

  dateDinamalar() {
    this.validation(this.before, this.after);
  }
  validation(before: String, after: String) {
    event?.preventDefault();
    let count = 0;
    if (before == null || before.trim() == "") {
      console.log("invalid");
    }
    else {
      count++;
    }
    if (after == null || after.trim() == "") {
      console.log("invalid");
    }
    else {
      count++;
    }

    if (count == 2) {

      this.spinner.show();
      const url = "https://collegelibrarysystem.herokuapp.com/news/deleteNews?date=" + before + "&toDate=" + after;
      this.http.get(url).subscribe((res: any) => {
        this.spinner.hide();

        this.value = res;


        this.none = "block";

      }, (err) => {
        this.toaster.error(err.error.message);
      });


    }

  }


}
