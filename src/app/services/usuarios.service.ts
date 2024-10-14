import { Injectable } from '@angular/core';
import { Usuario } from '../folder/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios = [
    { 'email':'admin@admin.cl','pass':'admin1234','tipo':'admin' },
    { 'email':'user@user.cl','pass':'user1234','tipo':'usuario' },
    
  ]
  constructor() { }
  getUsuario(){
    return this.usuarios;
  }

  addUsuario(usuarios: Usuario){
    this.usuarios.push(usuarios);
  }

  updateUsuarios(usuariosActualizados: Usuario[]): void {
    this.usuarios = usuariosActualizados;}

  
}
