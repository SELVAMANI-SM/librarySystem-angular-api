import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-showallmember',
  templateUrl: './showallmember.component.html',
  styleUrls: ['./showallmember.component.css']
})
export class ShowallmemberComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.Profile()
  }
  none="none";
  value!:any;
  item!:any;
  profile!:any

  
  Profile()
  {
   
  
 event?.preventDefault();
    
        this.spinner.show();
        const url ="https://collegelibrarysystem.herokuapp.com/user/allMember";
        this.http.get(url).subscribe((res: any) => {
          this.spinner.hide();
          this.item = res;
        
         // this.toastr.success(value);
         // this.router.navigate(["login"])
         // window.location.href = "http://localhost:4200/login";
        }, (err) => {
          alert(err.error.message);
          this.toastr.error(err.error);
         // window.location.reload();
        });
      

}

}
