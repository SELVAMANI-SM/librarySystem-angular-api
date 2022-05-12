import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';

import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookComponent } from './add-book/add-book.component';
import { AddnewspaperComponent } from './addnewspaper/addnewspaper.component';
import { LoginComponent } from './login/login.component';

import { SearchByBookDeptComponent } from './search-by-book-dept/search-by-book-dept.component';
import { DinamalarNewspaperComponent } from './dinamalar-newspaper/dinamalar-newspaper.component';
import { HinduNewspaperComponent } from './hindu-newspaper/hindu-newspaper.component';
import { IndianexpressNewspaperComponent } from './indianexpress-newspaper/indianexpress-newspaper.component';
import { DateDinamalarComponent } from './date-dinamalar/date-dinamalar.component';
import { DateHinduComponent } from './date-hindu/date-hindu.component';
import { DateIndianexpressComponent } from './date-indianexpress/date-indianexpress.component';
import { TakebookComponent } from './takebook/takebook.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { EbookLinkComponent } from './ebook-link/ebook-link.component';
import { VideoLinkComponent } from './video-link/video-link.component';
import { ProfileComponent } from './profile/profile.component';
import { UserBookDetailsComponent } from './user-book-details/user-book-details.component';
import { SearchByBookNameComponent } from './search-by-book-name/search-by-book-name.component';
import { SearchByBookAuthorComponent } from './search-by-book-author/search-by-book-author.component';
import { LogoutComponent } from './logout/logout.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { MembersDetailsComponent } from './members-details/members-details.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
import { ContactusComponent } from './contactus/contactus.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { QueryrepliedComponent } from './queryreplied/queryreplied.component';
import { UsersProcessComponent } from './users-process/users-process.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { DeletebookidComponent } from './deletebookid/deletebookid.component';
import { DeletebookdeptComponent } from './deletebookdept/deletebookdept.component';
import { DeletebookauthorComponent } from './deletebookauthor/deletebookauthor.component';
import { DeletenewspaperComponent } from './deletenewspaper/deletenewspaper.component';
import { AllqueryComponent } from './allquery/allquery.component';
import { RepliedqueryComponent } from './repliedquery/repliedquery.component';
import { MembertakebookComponent } from './membertakebook/membertakebook.component';
import { MemberreturnbookComponent } from './memberreturnbook/memberreturnbook.component';
import { ZzzComponent } from './zzz/zzz.component';
import { ShowalluserComponent } from './showalluser/showalluser.component';
import { ShowallmemberComponent } from './showallmember/showallmember.component';
import { PaymentComponent } from './payment/payment.component';
import { MemberregisterComponent } from './memberregister/memberregister.component';
import { ToastrModule } from 'ngx-toastr';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AddBookComponent,
    AddnewspaperComponent,
    LoginComponent,
    SearchByBookDeptComponent,
    DinamalarNewspaperComponent,
    HinduNewspaperComponent,
    IndianexpressNewspaperComponent,
    DateDinamalarComponent,
    DateHinduComponent,
    DateIndianexpressComponent,
    TakebookComponent,
    ReturnbookComponent,
    DisplayBookComponent,
    EbookLinkComponent,
    VideoLinkComponent,
    ProfileComponent,
    UserBookDetailsComponent,
    SearchByBookNameComponent,
    SearchByBookAuthorComponent,
    LogoutComponent,
    UsersDetailsComponent,
    MembersDetailsComponent,
    ContactusComponent,
    UserqueryComponent,
    QueryrepliedComponent,
    UsersProcessComponent,
    UpdatebookComponent,
    DeletebookidComponent,
    DeletebookdeptComponent,
    DeletebookauthorComponent,
    DeletenewspaperComponent,
    AllqueryComponent,
    RepliedqueryComponent,
    MembertakebookComponent,
    MemberreturnbookComponent,
    ZzzComponent,
    ShowalluserComponent,
    ShowallmemberComponent,
    PaymentComponent,
    MemberregisterComponent,
    SafePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),

    
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
