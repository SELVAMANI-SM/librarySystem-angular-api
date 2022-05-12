import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-members-details',
  templateUrl: './members-details.component.html',
  styleUrls: ['./members-details.component.css']
})
export class MembersDetailsComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.Profile();
  }

  none = "none";
  value!: any;
  item!: any;
  profile!: any


  Profile() {


    event?.preventDefault();



      this.spinner.show();
    const url = "http://localhost:9050/book/allMember";
    this.http.get(url).subscribe((res: any) => {
      this.spinner.hide();
      this.item = res;

      this.none = "block";

    }, (err) => {
      this.toastr.error(err.error.message);
    });


  }

}
