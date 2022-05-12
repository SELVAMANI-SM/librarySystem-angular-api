import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addnewspaper',
  templateUrl: './addnewspaper.component.html',
  styleUrls: ['./addnewspaper.component.css']
})
export class AddnewspaperComponent implements OnInit {

  constructor(private spinner:NgxSpinnerService,private http:HttpClient,private toaster:ToastrService) { }

  ngOnInit(): void {
  }
dinamalar!:String;
hindu!:String;
indianExpress!:String;
addNewsPaper()
{
this.validation(this.dinamalar,this.hindu,this.indianExpress);
}
validation(dinamalar:String,hindu:String,indianExpress:String){
  event?.preventDefault();
  let count=0;
  if(dinamalar==null||dinamalar.trim()=="")
  {
    console.log("invalid Dinamalar");
  }
  else{
    count++;
  }
  if(hindu==null||hindu.trim()=="")
  {
    console.log("invalid hindu");
  }
  else{
    count++;
  }
  if(indianExpress==null||indianExpress.trim()=="")
  {
    console.log("invalid indianExpress");
  }
  else{
    count++;
  }
  if(count==3)
  {
    this.spinner.show();
    const url="http://localhost:9050/news/add?indianExpress="+indianExpress+"&hindu="+hindu+"&dinamalar="+dinamalar;
  this.http.get(url).subscribe((res:any)=>{
    this.spinner.hide();
    let value=res.message;
    this.toaster.success(value);
  },(err)=>{
    this.toaster.error(err.error.message);
    window.location.reload();
  });
  
  }
}
}