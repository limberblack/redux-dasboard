import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardsGuard } from '../auth/guards.guard';
import { DashboardComponent } from './dashboard.component';
import { dashboardRoutes } from './dashboard.routes';

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
    children: dashboardRoutes,
   /*  canActivate: [GuardsGuard], */
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}
