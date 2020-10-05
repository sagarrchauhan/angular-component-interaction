import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputBindingComponent } from './input-binding/input-binding.component';
import { OutputBindingComponent } from './output-binding/output-binding.component';
import { ContentIndexComponent } from './content-index/content-index.component';
import { AccessingChildComponent } from './accessing-child/accessing-child.component';
import { ServiceMethodComponent } from './service-method/service-method.component';

const routes: Routes = [
  { path: 'front', component: ContentIndexComponent  },
  { path: 'input-binding', component: InputBindingComponent },
  { path: 'output-binding', component: OutputBindingComponent },
  { path: 'accessing-child', component: AccessingChildComponent },
  { path: 'service-method', component: ServiceMethodComponent },
  { path: '',   redirectTo: '/front', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
