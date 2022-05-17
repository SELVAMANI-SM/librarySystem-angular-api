import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { windowWhen } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private http:HttpClient,private toaster:ToastrService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }
  name!:String;
  department!:String;
  author!:String;
  status!:String;
  eBookLink!:String;
  videoLink!:String;
  imageLink!:String;

  nameError!:String


addBook(){
  this.validation(this.name,this.department,this.author,this.status,this.eBookLink,this.videoLink,this.imageLink)
}
validation( name:String,department:String,author:String,status:String,eBookLink:String,videoLink:String,imageLink:String){
  
    event?.preventDefault();
    let count=0;
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
    if(count==7)
    {
      this.spinner.show();

      const url="https://collegelibrarysystem.herokuapp.com/book/addBook?name="+name+"&department="+department+"&author="+author+"&status="+status+"&eBookLink="+eBookLink+"&videoLink="+videoLink+"&imageLink="+imageLink;
		this.http.get(url).subscribe((res:any)=>{
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



