import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-queryreplied',
  templateUrl: './queryreplied.component.html',
  styleUrls: ['./queryreplied.component.css']
})
export class QueryrepliedComponent implements OnInit {

  constructor( private http:HttpClient, private spinner: NgxSpinnerService,private toaster:ToastrService) { }

  
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
        const url ="https://collegelibrarysystem.herokuapp.com/user/queryChecks/"+this.profile;
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();          
          this.item=res;
        this.none="block";

        },(err)=>{
            this.toaster.error(err.error.message);
        });
         
            
        
      

}
}
