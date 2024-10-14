import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splashscreen',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'detalle-chofer',
    loadChildren: () => import('./pages/detalle-chofer/detalle-chofer.module').then( m => m.DetalleChoferPageModule)
  },
  {
    path: 'detalle-cliente',
    loadChildren: () => import('./pages/detalle-cliente/detalle-cliente.module').then( m => m.DetalleClientePageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'usuario-dashboard',
    loadChildren: () => import('./pages/usuario/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
 
  {
    path: 'home-chofer',
    loadChildren: () => import('./pages/home-chofer/home-chofer.module').then( m => m.HomeChoferPageModule)
  },
  {
    path: 'ubicacion-chofer',
    loadChildren: () => import('./pages/ubicacion-chofer/ubicacion-chofer.module').then( m => m.UbicacionChoferPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule)
  },
  {
    path: 'restablecer',
    loadChildren: () => import('./pages/restablecer/restablecer.module').then( m => m.RestablecerPageModule)
  },
  {
    path: 'qrcamera',
    loadChildren: () => import('./pages/qrcamera/qrcamera.module').then( m => m.QrcameraPageModule)
  },
  {
    path: 'mapa-cliente',
    loadChildren: () => import('./pages/mapa-cliente/mapa-cliente.module').then( m => m.MapaClientePageModule)
  },
  {
    path: 'home-cliente',
    loadChildren: () => import('./pages/home-cliente/home-cliente.module').then( m => m.HomeClientePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'editar-user/:uid',
    loadChildren: () => import('./pages/editar-user/editar-user.module').then( m => m.EditarUserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
