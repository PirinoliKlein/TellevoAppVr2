import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Page } from './folder/interfaces/page';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: Page[] = [];
  public tipoUsuario?: string;
  public emailUsuario?: string;
  public nombreUsuario?: string;
  

  constructor(private router: Router) {
  }
    ngOnInit() {
      const usuario = localStorage.getItem('usuarioLogin');

      if (usuario) { 
        const aux = JSON.parse(usuario);
        this.tipoUsuario = aux.tipo;
        this.emailUsuario = aux.email;
        this.configSideMenu();
      } else {
        this.router.navigate(['/login'])

      }
    }

  configSideMenu() {
    if (this.tipoUsuario === 'admin'){
      this.appPages = [
        { title: 'Dashboard', url: '/admin-dashboard', icon: 'home' },
        { title: 'Administrar usuarios', url: '/admin-user', icon: 'cube' },
        { title: 'Cerrar sesion', url: '/login', icon: 'log-out' }
      ]
    } else if (this.tipoUsuario === 'usuario'){
      this.appPages = [
        { title: 'Dashboard', url: '/home', icon: 'home' },
        { title: 'Cerrar sesion', url: '/login', icon: 'log-out' }
      ]
    }else{

    }
  }
}

