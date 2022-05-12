import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TakebookserviceService {
  fetch(url: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  id!:any
  type!:any
  
  Buybook(id:any){
   
    
    this.id=localStorage.getItem("SESSION_ID");
    this.type = localStorage.getItem("SESSION_USER");
   this.type=JSON.parse(this.type);
   console.log("mani");
    const url="http://localhost:9050/book/takeBook?id="+id+"&userId="+this.id+"&type="+this.type;
  fetch(url).then(res=>res.text()).then(res=>{
    let value=res;
    alert(value);
  });
}
}
