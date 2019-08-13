import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { Page3Component } from './page-3/page-3.component';

@NgModule({
    declarations: [AppComponent, Page1Component, Page2Component, Page3Component],
    imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
