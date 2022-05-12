import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-repliedquery',
  templateUrl: './repliedquery.component.html',
  styleUrls: ['./repliedquery.component.css']
})
export class RepliedqueryComponent implements OnInit {

  constructor(private http:HttpClient,private toaster :ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
    this.Profile()
  }
  value!:any;
  item!:any;
  none="none";
  number!:String;
  name!:String;
  userQuery!:String;
  profile!:any
  Profile()
  {
   
  
 event?.preventDefault();
    
     
     this.spinner.show();
        const url ="http://localhost:9050/user/allQueryCheck";
        this.http.get(url).subscribe((res:any)=>
        {
          this.spinner.hide();
          this.item=res;
        
        this.none="block";
         
        },(err)=>{
          this.toaster.error(err.error.message);
          window.location.reload();
        });
      
      

}
 
  reply(number:String,userQuery:String)
  {
    
    event?.preventDefault();
    let count=0;
    

    
    if(this.name==null||this.name.trim()=="")
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
     
      this.spinner.show();
      const url="http://localhost:9050/user/queryReply?userId="+number+"&reply="+this.name+"&userQuery="+userQuery;
      this.http.get(url).subscribe((res:any)=>
      {
        this.spinner.hide();
        
      let value=res.message;
      this.toaster.success(value);
      
       this.none="block";
       window.location.reload();
      },(err)=>
      {
          this.toaster.error(err.error.message);
      });
    
  }

}


}
