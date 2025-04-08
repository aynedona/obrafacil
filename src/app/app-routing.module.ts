import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'reset-password',
  //   loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  // },
  // {
  //   path: 'register-manager',
  //   loadChildren: () => import('./register-manager/register-manager.module').then( m => m.RegisterManagerPageModule)
  // },
  // {
  //   path: 'register-client',
  //   loadChildren: () => import('./register-client/register-client.module').then( m => m.RegisterClientPageModule)
  // },
  // {
  //   path: 'register-project',
  //   loadChildren: () => import('./register-project/register-project.module').then( m => m.RegisterProjectPageModule)
  // },
  // {
  //   path: 'project-details',
  //   loadChildren: () => import('./project-details/project-details.module').then( m => m.ProjectDetailsPageModule)
  // },
  // {
  //   path: 'client-details',
  //   loadChildren: () => import('./client-details/client-details.module').then( m => m.ClientDetailsPageModule)
  // },
  // {
  //   path: 'register-phase',
  //   loadChildren: () => import('./register-phase/register-phase.module').then( m => m.RegisterPhasePageModule)
  // },
  // {
  //   path: 'register-material',
  //   loadChildren: () => import('./register-material/register-material.module').then( m => m.RegisterMaterialPageModule)
  // },
  // {
  //   path: 'client-project-progress',
  //   loadChildren: () => import('./client-project-progress/client-project-progress.module').then( m => m.ClientProjectProgressPageModule)
  // },
  // {
  //   path: 'client-payments',
  //   loadChildren: () => import('./client-payments/client-payments.module').then( m => m.ClientPaymentsPageModule)
  // },

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register-manager",
    loadChildren: () => import("./register-manager/register-manager.module").then((m) => m.RegisterManagerPageModule),
  },
  {
    path: "register-client",
    loadChildren: () => import("./register-client/register-client.module").then((m) => m.RegisterClientPageModule),
  },
  {
    path: "reset-password",
    loadChildren: () => import("./reset-password/reset-password.module").then((m) => m.ResetPasswordPageModule),
  },
  {
    path: "register-project",
    loadChildren: () => import("./register-project/register-project.module").then((m) => m.RegisterProjectPageModule),
  },
  {
    path: "project-details/:id",
    loadChildren: () => import("./project-details/project-details.module").then((m) => m.ProjectDetailsPageModule),
  },
  {
    path: "client-details/:id",
    loadChildren: () => import("./client-details/client-details.module").then((m) => m.ClientDetailsPageModule),
  },
  {
    path: "register-phase/:id",
    loadChildren: () => import("./register-phase/register-phase.module").then((m) => m.RegisterPhasePageModule),
  },
  {
    path: "register-material/:id",
    loadChildren: () =>
      import("./register-material/register-material.module").then((m) => m.RegisterMaterialPageModule),
  },
  {
    path: "client-project-progress/:id",
    loadChildren: () =>
      import("./client-project-progress/client-project-progress.module").then((m) => m.ClientProjectProgressPageModule),
  },
  {
    path: "client-payments",
    loadChildren: () => import("./client-payments/client-payments.module").then((m) => m.ClientPaymentsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
