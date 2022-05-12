import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-indianexpress-newspaper',
  templateUrl: './indianexpress-newspaper.component.html',
  styleUrls: ['./indianexpress-newspaper.component.css']
})
export class IndianexpressNewspaperComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.indianNews();
  }

  value!:any;
  item!:any;
  none="none";
  indianNews()
  {
     
       this.spinner.show();
        const url="http://localhost:9050/news/indianExpress";
        this.http.get(url).subscribe((res:any)=>{
          this.spinner.hide();
          this.value=res;
          this.none="block";

        },(err)=>{
          this.toastr.error(err.error.message);
          window.location.reload();

        });
      
    }

}
