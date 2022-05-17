import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-deletebookauthor',
  templateUrl: './deletebookauthor.component.html',
  styleUrls: ['./deletebookauthor.component.css']
})
export class DeletebookauthorComponent implements OnInit {

  constructor(private http: HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
 
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
     
      const url="https://collegelibrarysystem.herokuapp.com/book/findByAuthor/"+author;
      this.http.get(url).subscribe((res:any)=>
      {
        let value=res.message;
        this.toaster.success(value);
        window.location.reload();
        //alert(value);
      
      },(err)=>
      {
          this.toaster.error(err.error.message)
          window.location.reload();
      });
    }
  }

}
