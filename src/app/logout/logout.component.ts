import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
  
    this.Logout()
    
  }
  Logout()
  {
    let count =2;
    event?.preventDefault();
    localStorage.removeItem("SESSION_ID");
    localStorage.removeItem("SESSION_USER");
    if(count==2)
    {
    window.location.reload();
  }
  count++;
    this.router.navigate(["home"]);
    




}


}
