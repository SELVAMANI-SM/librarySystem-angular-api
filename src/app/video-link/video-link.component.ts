import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video-link',
  templateUrl: './video-link.component.html',
  styleUrls: ['./video-link.component.css']
})
export class VideoLinkComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  videolink!:any;
  value!:any;
  item!:any;

 
  none="none";
  videoLink()
  {
    this.validation(this.videolink);
  }
  validation(videolink:number){
    let count=0;
    event?.preventDefault();
    if(videolink==0)
    {
      console.log("invalid number")
    }
    else{
      count++;
    }
    if(count==1)
    {
      alert(videolink);
      this.spinner.show();
      const url="http://localhost:9050/book/videoLink/"+videolink;
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
