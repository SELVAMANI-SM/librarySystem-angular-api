import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.User()
  }
  user!: any
  users="users"
  admin="admin"
  member="member"
  login="login"

  type!: any
  types!:any
  logout(){
    localStorage.removeItem("SESSION_ID");
    localStorage.removeItem("SESSION_USER");
    window.location.reload();
    window.location.href="home";
  }

  User() {
    this.type = localStorage.getItem("SESSION_USER");
    this.types=JSON.parse(this.type);
    if(this.types==null)
    {
      this.user="login"
    }
    else if(this.types.includes('user'))
    {
      this.user="users"
    }
    else if(this.types.includes('member'))
    {
      this.user="member"
    }
    else
    {
        this.user="admin"
    }
  }

 
}
