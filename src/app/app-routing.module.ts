import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import {TasksComponent} from './components/tasks/tasks.component'
import {PrivateTasksComponent} from './components/private-tasks/private-tasks.component'
import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'
import {ProjectsComponent} from './components/projects/projects.component'
import {NosostrosComponent} from './components/nosostros/nosostros.component'

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: TasksComponent
  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'nosotros',
    component: NosostrosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
