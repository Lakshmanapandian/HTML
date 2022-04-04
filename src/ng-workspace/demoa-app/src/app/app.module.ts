import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent} from './app.header.component';
import { BoxaComponent } from './boxa/boxa.component';
import { CustomerFormComponent } from './customer-form/customer-form.component'
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppComponent,
    BoxaComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,HomeComponent,AppHeaderComponent]
})
export class AppModule { }
