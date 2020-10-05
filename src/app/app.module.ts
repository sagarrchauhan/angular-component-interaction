import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentIndexComponent } from './content-index/content-index.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { OutputBindingComponent } from './output-binding/output-binding.component';
import { BackComponent } from './back/back.component';
import { InputSetterBindingComponent } from './input-setter-binding/input-setter-binding.component';
import { InputNgChangesComponent } from './input-ng-changes/input-ng-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentIndexComponent,
    InputBindingComponent,
    OutputBindingComponent,
    BackComponent,
    InputSetterBindingComponent,
    InputNgChangesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
