import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-process',
  templateUrl: './users-process.component.html',
  styleUrls: ['./users-process.component.css']
})
export class UsersProcessComponent implements OnInit {

 constructor(private http: HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }


  ngOnInit(): void {
    this.Profile()
  }

  none = "none";
  value!: any;
  item!: any;
  profile!: any


  Profile() {


    event?.preventDefault();

    this.spinner.show();
    const url = "http://localhost:9050/book/allUser";
    this.http.get(url).subscribe((res: any) => {

      this.spinner.hide();
      this.item = res;

      this.none = "block";
    }, (err) => {
      this.toastr.error(err.error.messsage);
    });





  }

}
