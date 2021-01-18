import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {path:'registration', component:RegistrationComponent},
  { path:'reactive'  , component:ReactiveRegistrationComponent },
  { path:'dynamicform'  , component:DynamicFormComponent },
  { path:'**'  , component:DynamicFormComponent },
  // { path:'**'  , component:TestComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
