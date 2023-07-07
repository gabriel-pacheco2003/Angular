import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BindingsComponent } from './bindings/bindings.component';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { PipesComponent } from './pipes/pipes.component';


const routes: Routes = [
  { path: 'bindings', component: BindingsComponent},
  { path: 'exemplo-bindings', component: ExemploBindingComponent},
  { path: 'imc', component: CalculoImcComponent},
  { path: 'class', component: NgClassComponent},
  { path: 'for', component: NgForComponent},
  { path: 'if', component: NgIfComponent},
  { path: 'model', component: NgModelComponent},
  { path: 'style', component: NgStyleComponent},
  { path: 'switch', component: NgSwitchComponent},
  { path: 'pipes', component: PipesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
