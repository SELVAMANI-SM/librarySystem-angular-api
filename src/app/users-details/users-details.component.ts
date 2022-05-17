import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

 
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
    
      this.profile=localStorage.getItem("SESSION_ID");
    this.spinner.show();
        const url ="https://collegelibrarysystem.herokuapp.com/book/userProcess/"+this.profile;
        alert(this.profile)
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();
          this.item=res;
        alert(this.item)
        this.none="block";
        },(err)=>{
          this.toastr.error(err.error.message);

        });
      
      

}
}
