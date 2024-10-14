import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {


viajes = [
{nombreConductor:'Josias Gonzalez',Direccion:'Mall Tobalaba', Patente:'BHK50',imagen:'assets/icon/josias.png',precio:'5000'},
{nombreConductor:'Israel Gonzalez',Direccion:'Estacion de metro Macul', Patente:'DJH36',imagen:'assets/icon/israel.png',precio:'2500'},
{nombreConductor:'Angol Contreras',Direccion:'Camilo Enrique con Luis Mate', Patente:'GHD3F',imagen:'assets/icon/angol.png',precio:'1000'},
{nombreConductor:'Horaci Vergara',Direccion:'Florida Santa Raquel', Patente:'XDXD55',imagen:'assets/icon/horaci.png',precio:'3000'},
];


  constructor(private router: Router) { }

  ngOnInit() {
  }
  verDetalleChofer(aux:any){
    this.router.navigate(['detalle-chofer',aux.nombreConductor]);
  }
  
  abrirModal(viaje:any){
    this.viajeSeleccionado = viaje;
    this.modalAbierta = true;
  }

  cerrarModal(){
    this.modalAbierta = false;
  }

  viajeSeleccionado: any;
  modalAbierta: boolean = false;
}
