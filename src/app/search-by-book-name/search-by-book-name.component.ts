import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-by-book-name',
  templateUrl: './search-by-book-name.component.html',
  styleUrls: ['./search-by-book-name.component.css']
})
export class SearchByBookNameComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";

  name!:String;
  Name()
  {
    this.validation(this.name);
  }
  validation(name:String)
  {
    event?.preventDefault();
    let count=0;
    if(name==null||name.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      this.spinner.show();
      const url="http://localhost:9050/book/findByName/"+name;
      this.http.get(url).subscribe((res:any)=>
      {
        this.spinner.hide();
      this.value=res;
		
    this.none="block";
      },(err)=>
      {
        this.toastr.error(err.error.message);
      });
  }

}
}
