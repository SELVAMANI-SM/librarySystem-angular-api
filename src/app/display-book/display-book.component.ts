import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { TakebookserviceService } from '../services/takeBooksService/takebookservice.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {
  



  constructor( private tbs:TakebookserviceService,private spinner:NgxSpinnerService,private http:HttpClient,private toastr:ToastrService) { }

  ngOnInit(): void {
    window.location.reload();
   this.displayBook()
  }
  
  display!:any;
  displays!:any;
  value!:any;
  item!:any;
  
  id!:any;
  type:any


 
  displayBook()
  {
    
  
   this.spinner.show();
    const url="https://collegelibrarysystem.herokuapp.com/book/display";
    this.http.get(url).subscribe((res: any) => {
      this.spinner.hide(); 
        this.value = res;
      
       // this.toastr.success(value);
       // this.router.navigate(["login"])
       // window.location.href = "http://localhost:4200/login";
      }, (err) => {
        alert(err.error.message);
        this.toastr.error(err.error);
       // window.location.reload();
      });
    
      

		
   
    
        
		
   
    
  }
 
  

}
