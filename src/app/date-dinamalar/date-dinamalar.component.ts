import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-date-dinamalar',
  templateUrl: './date-dinamalar.component.html',
  styleUrls: ['./date-dinamalar.component.css']
})
export class DateDinamalarComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toaster:ToastrService ) { }

  ngOnInit(): void {
  }
  datedinamalar:String = "2022-05-08";
  value!:any;
  date!:any;
  none="none";


  
  dateDinamalar()
  {
    this.validation(this.datedinamalar);
  }

  
  validation(datedinamalar:String)
  {
    event?.preventDefault();
    let count=0;
    if(datedinamalar==null||datedinamalar.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      this.spinner.show();
    
        const url="https://collegelibrarysystem.herokuapp.com/news/dinamalarByDate/"+datedinamalar;
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
