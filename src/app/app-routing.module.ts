import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFlowinfoComponent } from './create-flowinfo/create-flowinfo.component';
import { FlowinfoListComponent } from './flowinfo-list/flowinfo-list.component';

const routes: Routes = [{ path: '', redirectTo: 'flowinfo', pathMatch: 'full' },
{ path: 'flowinfos', component: FlowinfoListComponent },
{ path: 'add', component: CreateFlowinfoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
