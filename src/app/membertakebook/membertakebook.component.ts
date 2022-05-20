import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membertakebook',
  templateUrl: './membertakebook.component.html',
  styleUrls: ['./membertakebook.component.css']
})
export class MembertakebookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.helo()
   }
   
   display!:any;
   displays!:any;
   value!:any;
   item!:any;
   none="none";
   none1="none";
   id!:any;
   type:any;
   var!:String;
   
 
 
   helo()
  {
    event?.preventDefault();
    this.id=localStorage.getItem("SESSION_ID");
    const url ="https://collegelibrarysystem.herokuapp.com/book/findIds/"+this.id;
    
    fetch(url).then(res=>res.text()).then(res=>{
      let ans=res;
      
      let ans1=parseInt(ans)
      if(ans1<5)
      {
        this.displayBook()

          
      }
      else
      {
        alert(" Atleast you need return one Book")
      }
    });
    
  }
   displayBook()
   {
     
     this.none1="block";
    
     const url="https://collegelibrarysystem.herokuapp.com/book/display";
     fetch(url).then(res=>res.json()).then(res=>{
       
       this.value=res;
       
 
     
     this.none="block";
     
         
     });
    
     
   }

   buybook(id:any)
   {
     
    
    
     this.id=localStorage.getItem("SESSION_ID");
     this.type = localStorage.getItem("SESSION_USER");
    this.type=JSON.parse(this.type);
     const url="https://collegelibrarysystem.herokuapp.com/book/takeBook?id="+id+"&userId="+this.id+"&type="+this.type;
   fetch(url).then(res=>res.text()).then(res=>{
     let value=res;
     alert(value);
     window.location.href="users-details";
   });
   }

}
