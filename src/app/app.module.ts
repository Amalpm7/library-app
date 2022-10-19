import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddLibraryComponent } from './add-library/add-library.component';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { ViewLibraryComponent } from './view-library/view-library.component';

const appRouter:Routes=[
  {
    path:"",component:AddLibraryComponent
  },
  {
    path:"view",component:ViewLibraryComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddLibraryComponent,
    ViewLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
