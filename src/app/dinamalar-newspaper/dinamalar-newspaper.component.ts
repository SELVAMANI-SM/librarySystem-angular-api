import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dinamalar-newspaper',
  templateUrl: './dinamalar-newspaper.component.html',
  styleUrls: ['./dinamalar-newspaper.component.css']
})
export class DinamalarNewspaperComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.dinamalarNews();
  }
  value!:any;
  item!:any;
  none="none";
  dinamalarNews()
  {
     
    this.spinner.show();
     const url="http://localhost:9050/news/dinamalar";
        this.http.get(url).subscribe((res:any)=>{
        this.spinner.hide();
        this.value=res;
		    this.none="block";
      },(err)=>
      {
        this.toaster.error(err.error.message);
        window.location.reload();
      });
      
    }
 }

