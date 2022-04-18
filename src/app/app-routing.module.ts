import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReposComponent } from './components/repos/repos.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
     path: '',
     component: HomeComponent
},
{
     path:'search',
     component: SearchpageComponent
},
{
  path:'user/:id',
  component: UserDetailsComponent
},
{
  path:'repos',
  component:ReposComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
