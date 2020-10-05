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
import { ParentI1Component } from './input-binding/parent-i1/parent-i1.component';
import { ChildI1Component } from './input-binding/child-i1/child-i1.component';
import { ParentI2Component } from './input-setter-binding/parent-i2/parent-i2.component';
import { ChildI2Component } from './input-setter-binding/child-i2/child-i2.component';
import { ParentI3Component } from './input-ng-changes/parent-i3/parent-i3.component';
import { ChildI3Component } from './input-ng-changes/child-i3/child-i3.component';
import { ParentI4Component } from './output-binding/parent-i4/parent-i4.component';
import { ChildI4Component } from './output-binding/child-i4/child-i4.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContentIndexComponent,
    InputBindingComponent,
    OutputBindingComponent,
    BackComponent,
    InputSetterBindingComponent,
    InputNgChangesComponent,
    ParentI1Component,
    ChildI1Component,
    ParentI2Component,
    ChildI2Component,
    ParentI3Component,
    ChildI3Component,
    ParentI4Component,
    ChildI4Component
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
