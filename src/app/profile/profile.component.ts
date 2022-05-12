import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Profile()
  }
  none="none";
  value!:any;
  profile!:any

  
  Profile()
  {
   
  
 event?.preventDefault();
    
      this.profile=localStorage.getItem("SESSION_ID");
      this.spinner.show();
        const url ="http://localhost:9050/user/profile/"+this.profile;
        this.http.get(url).subscribe((res: any) => {
          this.spinner.hide();
          this.value = res;
        }, (err) => {
          alert(err.error.message);
          this.toastr.error(err.error.message);
        });
      

}
}
