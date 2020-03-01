import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodosComponent } from './todos/todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterGaurdServiceService } from './services/router-gaurd-service.service';


const routes: Routes = [{path:'login',component:LoginComponent},
{path:'welcome/:name',component:WelcomeComponent,canActivate:[RouterGaurdServiceService]},
{path:'todos',component:TodosComponent,canActivate:[RouterGaurdServiceService]},
{path:'logout',component:LogoutComponent},

  {path:'**',component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

