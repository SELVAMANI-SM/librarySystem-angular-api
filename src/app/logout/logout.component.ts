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
    event?.preventDefault();
    localStorage.removeItem("SESSION_ID");
    localStorage.removeItem("SESSION_USER");
    window.location.reload();
    //window.location.href="http://localhost:4200/home";
    this.router.navigate(["home"]);


}


}
