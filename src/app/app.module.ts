import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserDetailsComponent,
    SearchpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
