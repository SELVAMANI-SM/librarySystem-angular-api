import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-allquery',
  templateUrl: './allquery.component.html',
  styleUrls: ['./allquery.component.css']
})
export class AllqueryComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toaster:ToastrService ) { }
  ngOnInit(): void {
    this.Profile()
  }
  none="none";
  value!:any;
  item!:any;
  profile!:any
  name!:String;

  
  Profile()
  {
   
  
 event?.preventDefault();
    
     
    this.spinner.show();
        const url ="http://localhost:9050/user/allQueryCheck";
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();
          this.item=res;
          this.none="block";
        },(err)=>
        {
            this.toaster.error(err.error.message)
            window.location.reload();
        });
      

}
}
