import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date-hindu',
  templateUrl: './date-hindu.component.html',
  styleUrls: ['./date-hindu.component.css']
})
export class DateHinduComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
  datehindu!:String;
  value!:any
  none="none";
  date!:any
  dateHindu()
  {
    this.validation(this.datehindu);
  }
  validation(datehindu:String)
  {
    event?.preventDefault();
    let count=0;
    if(datehindu==null||datehindu.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      this.spinner.show();
      const url="http://localhost:9050/news/hinduByDate/"+datehindu;
      this.http.get(url).subscribe((res:any)=>{
        this.spinner.hide();
        this.value=res;
        this.none="block";
      },(err)=>
      {
        this.toaster.error(err.error.message);
      });
    }

  }
 


}
