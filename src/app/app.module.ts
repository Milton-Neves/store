import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from "../assets/shared/components/menubar/menubar.component";
import { FooterComponent } from "../assets/shared/components/footer/footer.component";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './routers/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MenubarComponent,
        FooterComponent,
        HomeComponent,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
