import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-book-details',
  templateUrl: './user-book-details.component.html',
  styleUrls: ['./user-book-details.component.css']
})
export class UserBookDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userbook!:number;
  userBook()
  {
    this.validation(this.userbook);

  }
  validation(userbook:number)
  {
    event?.preventDefault();
    let count=0;
    if(userbook==0)
    {
      console.log("invalid");
    }
    else{
      count++;
    }
    if(count==1)
    {
      console.log("success");
    }
    else{
      console.log("falied");
    }
  }

}
