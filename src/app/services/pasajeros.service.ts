import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasajerosService {
  viajes = [
    {nombreConductor:'Josias Gonzalez',Direccion:'Mall Tobalaba', Patente:'BHK50',imagen:'assets/icon/josias.png',precio:'5000'},
    {nombreConductor:'Israel Gonzalez',Direccion:'Estacion de metro Macul', Patente:'DJH36',imagen:'assets/icon/israel.png',precio:'2500'},
    {nombreConductor:'Angol Contreras',Direccion:'Camilo Enrique con Luis Mate', Patente:'GHD3F',imagen:'assets/icon/angol.png',precio:'1000'},
    {nombreConductor:'Horaci Vergara',Direccion:'Florida Santa Raquel', Patente:'XDXD55',imagen:'assets/icon/horaci.png',precio:'3000'},
    ];
  constructor() { }
  getViajes(){
    return this.viajes;
  }

  addViajes(viajes: any){
    this.viajes.push(viajes);
  }

  deleteChofer(){

  }
}
