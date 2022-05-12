import { HttpClient } from '@angular/common/http';
import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {

  constructor(private http:HttpClient,private spinner:NgxSpinnerService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  idnumber!:String;
  name!:String;
  department!:String;
  author!:String;
  status!:String;
  eBookLink!:String;
  videoLink!:String;
  imageLink!:String;

  nameError!:String


addBook(){
  this.validation(this.idnumber,this.name,this.department,this.author,this.status,this.eBookLink,this.videoLink,this.imageLink)
}
validation( idnumber:String,name:String,department:String,author:String,status:String,eBookLink:String,videoLink:String,imageLink:String){
  
    event?.preventDefault();
    let count=0;
    if(idnumber==null|| idnumber.trim()=="")
    {
      console.log("invalid number");
    }
    else{
      count++;
    }
    if(name == null || name.trim()=="")
    {
      this.nameError="invalid Book name"
    }
    else{
      count++;
    }
    if(department == null ||department.trim()=="")
    {
      console.log("invalid DepartMent");
    }
    else{
      count++;
    }
    if( author == null || author.trim()=="")
    {
      console.log("invalid author");
    }
    else{
      count++;
    }
    if(status == null ||status.trim()=="")
    {
      console.log("invalid status");
    }
    else{
      count++;
    }
    if(eBookLink == null ||eBookLink.trim()=="")
    {
      console.log("invalid eBookLink");
    }
    else{
      count++;
    }
    if(videoLink == null ||videoLink.trim()=="")
    {
      console.log("invalid videoLink");
    }
    else{
      count++;
    }
    if(imageLink == null ||imageLink.trim()=="")
    {
      console.log("invalid imageLink");
    }
    else{
      count++;
    }
    if(count==8)
    {
      
      const url="http://localhost:9050/book/updateById?id="+idnumber+"&name="+name+"&department="+department+"&author="+author+"&status="+status+"&eBookLink="+eBookLink+"&videoLink="+videoLink+"&imageLink="+imageLink;
      this.http.get(url).subscribe((res:any)=>
      {
        let value=res.message;
			this.toastr.success(value);
      window.location.reload();
      },(err)=>
      {
        this.toastr.error(err.error.message)
      }); 
		}
  }
   

}
