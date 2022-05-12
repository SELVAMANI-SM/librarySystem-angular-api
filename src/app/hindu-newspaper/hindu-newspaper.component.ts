import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hindu-newspaper',
  templateUrl: './hindu-newspaper.component.html',
  styleUrls: ['./hindu-newspaper.component.css']
})
export class HinduNewspaperComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.hinduNews();
  }

  value!:any;
  item!:any;
  none="none";
  hinduNews()
  {
     
    this.spinner.show();
        const url="http://localhost:9050/news/hindu";
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
