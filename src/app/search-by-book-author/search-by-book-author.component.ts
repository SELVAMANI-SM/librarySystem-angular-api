import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-by-book-author',
  templateUrl: './search-by-book-author.component.html',
  styleUrls: ['./search-by-book-author.component.css']
})
export class SearchByBookAuthorComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  none="none";
  author!:String;
  Author()
  {
    this.validation(this.author);
  }
  validation(author:String)
  {
    event?.preventDefault();
    let count=0;
    if(author==null||author.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      this.spinner.show();
      const url="https://collegelibrarysystem.herokuapp.com/book/findByAuthor/"+author;
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
