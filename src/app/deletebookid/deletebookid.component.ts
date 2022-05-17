import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletebookid',
  templateUrl: './deletebookid.component.html',
  styleUrls: ['./deletebookid.component.css']
})
export class DeletebookidComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toaster:ToastrService ) { }

  ngOnInit(): void {
  }
  value!:any;
  item!:any;
  

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
      const url="https://collegelibrarysystem.herokuapp.com/book/deleteById/"+name;
      this.http.get(url).subscribe((res:any)=>
      {
        this.spinner.hide();

        let value=res.message;
        this.toaster.success(value);
        window.location.reload();
      },(err)=>
      {
          this.toaster.error(err.error.message);
          window.location.reload();
      });
  }

}

}
