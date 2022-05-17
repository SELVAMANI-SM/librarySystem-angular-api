import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ebook-link',
  templateUrl: './ebook-link.component.html',
  styleUrls: ['./ebook-link.component.css']
})
export class EbookLinkComponent implements OnInit {

  constructor(private http:HttpClient,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  booklink!:number;
  value!:any;
  item!:any;

 
  none="none";
  EBookLink()
  {
    this.validation(this.booklink);
  }
  validation(booklink:number){
    let count=0;
    event?.preventDefault();
    if(booklink==0)
    {
      console.log("invalid number")
    }
    else{
      count++;
    }
   
    if(count==1)
    {
      alert(booklink)
      this.spinner.show();
      const url="https://collegelibrarysystem.herokuapp.com/book/eLink/"+booklink;
      fetch(url).then(res=>res.json()).then(res=>{
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
    
  

}
