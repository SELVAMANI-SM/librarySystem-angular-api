import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memberreturnbook',
  templateUrl: './memberreturnbook.component.html',
  styleUrls: ['./memberreturnbook.component.css']
})
export class MemberreturnbookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.helo()
   }
   
   display!:any;
   displays!:any;
   value!:any;
   item!:any;
   
   id!:any;
   type:any
   ans!:any
 
 
  helo()
  {
    event?.preventDefault();
    this.id=localStorage.getItem("SESSION_ID");
    const url ="http://localhost:9050/book/findId/"+this.id;
    
    fetch(url).then(res=>res.text()).then(res=>{
      let ans=res;
      
      if(ans.includes("0"))
      {
        alert("NO BOOK TAKEN");
          
      }
      else
      {
        this.displayBook();
      }
    });
    
  }
   displayBook()
   {
    event?.preventDefault();
    this.id=localStorage.getItem("SESSION_ID");
    
     
    
    
     const url="http://localhost:9050/book/memberReturn/"+this.id;
     fetch(url).then(res=>res.json()).then(res=>{
       
       
       this.value=res;
      
       
 
     
    
     
         
     });
    
     
   }
  
   bookreturn(id:any){
    event?.preventDefault();
    
     this.id=localStorage.getItem("SESSION_ID");
     const url="http://localhost:9050/book/returnBook?id="+id+"&userId="+this.id;
    
     fetch(url).then(res=>res.text()).then(res=>{
       let varr=res;
       alert(varr);
       window.location.href="http://localhost:4200/users-details";
     });
   }
  

}
