import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentIndexComponent } from './content-index/content-index.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { OutputBindingComponent } from './output-binding/output-binding.component';
import { BackComponent } from './back/back.component';
import { ParentI1Component } from './input-binding/parent-i1/parent-i1.component';
import { ChildI1Component } from './input-binding/child-i1/child-i1.component';
import { ChildI2Component } from './input-binding/child-i2/child-i2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContentIndexComponent,
    InputBindingComponent,
    OutputBindingComponent,
    BackComponent,
    ParentI1Component,
    ChildI1Component,
    ChildI2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
