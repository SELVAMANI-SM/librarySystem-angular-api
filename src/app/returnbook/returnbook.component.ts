import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

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
    
    const url ="https://collegelibrarysystem.herokuapp.com/book/findId/"+this.id;
    
    fetch(url).then(res=>res.text()).then(res=>{
      let ans=res;
      
      if(ans.includes("0"))
      {
        alert("NO BOOK TAKEN");
          
      }
      else
      {
        
        this.displayBook(ans);
       
      }
    });
    
  }
   displayBook(ans:any)
   {
     
    event?.preventDefault();
    
     
    
    
     const url="https://collegelibrarysystem.herokuapp.com/book/findById/"+ans;
     fetch(url).then(res=>res.json()).then(res=>{
       
       
       this.item=res;
      
       
 
     
    
     
         
     });
    
     
   }
  
   bookreturn(id:any){
     alert(id);
    event?.preventDefault();
    
     this.id=localStorage.getItem("SESSION_ID");
     alert(this.id);
     const url="https://collegelibrarysystem.herokuapp.com/book/returnBook?id="+id+"&userId="+this.id;
    
     fetch(url).then(res=>res.text()).then(res=>{
       let varr=res;
       alert(varr);
       window.location.href="users-details";
     });
     
   }
  
   

}
