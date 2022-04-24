import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherlistComponent } from './weatherlist/weatherlist.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './shared/weather.service';


@NgModule({
  declarations: [
    AppComponent,
    WeatherlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
