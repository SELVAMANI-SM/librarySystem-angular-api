import { NgModule } from '@angular/core';
import { DefaultUrlSerializer, RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AddnewspaperComponent } from './addnewspaper/addnewspaper.component';
import { AllqueryComponent } from './allquery/allquery.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DateDinamalarComponent } from './date-dinamalar/date-dinamalar.component';
import { DateHinduComponent } from './date-hindu/date-hindu.component';
import { DateIndianexpressComponent } from './date-indianexpress/date-indianexpress.component';
import { DeletebookauthorComponent } from './deletebookauthor/deletebookauthor.component';
import { DeletebookdeptComponent } from './deletebookdept/deletebookdept.component';
import { DeletebookidComponent } from './deletebookid/deletebookid.component';
import { DeletenewspaperComponent } from './deletenewspaper/deletenewspaper.component';
import { DinamalarNewspaperComponent } from './dinamalar-newspaper/dinamalar-newspaper.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { EbookLinkComponent } from './ebook-link/ebook-link.component';
import { HinduNewspaperComponent } from './hindu-newspaper/hindu-newspaper.component';
import { HomeComponent } from './home/home.component';
import { IndianexpressNewspaperComponent } from './indianexpress-newspaper/indianexpress-newspaper.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MemberregisterComponent } from './memberregister/memberregister.component';
import { MemberreturnbookComponent } from './memberreturnbook/memberreturnbook.component';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { MembertakebookComponent } from './membertakebook/membertakebook.component';
import { ProfileComponent } from './profile/profile.component';
import { QueryrepliedComponent } from './queryreplied/queryreplied.component';

import { RegisterComponent } from './register/register.component';
import { RepliedqueryComponent } from './repliedquery/repliedquery.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { SearchByBookAuthorComponent } from './search-by-book-author/search-by-book-author.component';

import { SearchByBookDeptComponent } from './search-by-book-dept/search-by-book-dept.component';
import { SearchByBookNameComponent } from './search-by-book-name/search-by-book-name.component';
import { ShowallmemberComponent } from './showallmember/showallmember.component';
import { ShowalluserComponent } from './showalluser/showalluser.component';

import { TakebookComponent } from './takebook/takebook.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UserBookDetailsComponent } from './user-book-details/user-book-details.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersProcessComponent } from './users-process/users-process.component';
import { VideoLinkComponent } from './video-link/video-link.component';
import { ZzzComponent } from './zzz/zzz.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},

  {path:'home',component:HomeComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'addnewspaper',component:AddnewspaperComponent},
  {path:'date-dinamalar',component:DateDinamalarComponent},
  {path:'date-hindu',component:DateHinduComponent},
  {path:'date-indianexpress',component:DateIndianexpressComponent},
  {path:'dinamalar-newspaper',component:DinamalarNewspaperComponent},
  {path:'display-book',component:DisplayBookComponent},
  {path:'ebook-link',component:EbookLinkComponent},
  {path:'hindu-newspaper',component:HinduNewspaperComponent},{
    path:'indianexpress-newspaper',component:IndianexpressNewspaperComponent
  },
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'returnbook',component:ReturnbookComponent},
  {path:'search-by-book-author',component:SearchByBookAuthorComponent},
  {path:'search-by-book-dept',component:SearchByBookDeptComponent},
  {
    path:'search-by-book-name',component:SearchByBookNameComponent
  },
  {
    path:'takebook',component:TakebookComponent
  },
  {path:'user-book-details',component:UserBookDetailsComponent},
  {path:'video-link',component:VideoLinkComponent},
  {path:'user-details',component:UsersDetailsComponent},
  {path:'logout',component:LogoutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'users-details',component:UsersDetailsComponent},
  {path:'userquery',component:UserqueryComponent},
  {path:'queryreplied',component:QueryrepliedComponent},
  {path:'users-process',component:UsersProcessComponent},
  {path:'members-details',component:MembersDetailsComponent},
  {path:'updatebook',component:UpdatebookComponent},
  {path:'deletebookid',component:DeletebookidComponent},
  { path:'deletebookdept',component:DeletebookdeptComponent},
  {path:'deletebookauthor',component:DeletebookauthorComponent},
  {path:'deletenewspaper',component:DeletenewspaperComponent},

  {path:'allquery',component:AllqueryComponent},
  {path:'repliedquery',component:RepliedqueryComponent},
  {path:'membertakebook',component:MembertakebookComponent},
  {path:'memberreturnbook',component:MemberreturnbookComponent},
  {path:'showalluser',component:ShowalluserComponent},
  {path:'showallmember',component:ShowallmemberComponent},
  {
    path:'memberregister',component:MemberregisterComponent},

  {path:'zzz',component:ZzzComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
