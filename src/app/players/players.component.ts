import { Component, OnInit } from '@angular/core';
import { Jugador } from './Jugador';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  obtenerClasePorPosicion(posicion:string){
    return posicion;
  }

  arqueros : Jugador[] = [
    {
      nombre : "Emiliano",
      apellido: "Martinez",
      camiseta: 23,
      posicion: "arquero",
      foto: "string",
    },
    {
      nombre : "Geronimo",
      apellido: "Rulli",
      camiseta: 12,
      posicion: "arquero",
      foto: "string",
    },
    {
      nombre : "Franco",
      apellido: "Armani",
      camiseta: 1,
      posicion: "arquero",
      foto: "string",
    },
  ]
  defensores : Jugador[] = [
    {
      nombre : "Nahuel",
      apellido: "Molina",
      camiseta: 26,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Gonzalo",
      apellido: "Montiel",
      camiseta: 4,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Cristian",
      apellido: "Romero",
      camiseta: 13,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Germán",
      apellido: "Pezzella",
      camiseta: 6,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Nicolás",
      apellido: "Otamendi",
      camiseta: 19,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Lisandro",
      apellido: "Martínez",
      camiseta: 25,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Marcos",
      apellido: "Acuña",
      camiseta: 8,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Nicolás",
      apellido: "Tagliafico",
      camiseta: 3,
      posicion: "defensor",
      foto: "string",
    },
    {
      nombre : "Juan",
      apellido: "Foyth",
      camiseta: 2,
      posicion: "defensor",
      foto: "string",
    },
  ]
  mediocampistas : Jugador[] = [
    {
      nombre : "Rodrigo",
      apellido: "De Paul",
      camiseta: 7,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Leandro",
      apellido: "Paredes",
      camiseta: 5,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Alexis",
      apellido: "Mac Allister",
      camiseta: 20,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Guido",
      apellido: "Rodríguez",
      camiseta: 18,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Alejandro",
      apellido: "Gómez",
      camiseta: 17,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Enzo",
      apellido: "Fernández",
      camiseta: 24,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Exequiel",
      apellido: "Palacios",
      camiseta: 14,
      posicion: "mediocampista",
      foto: "string",
    },
    {
      nombre : "Thiago",
      apellido: "Almada",
      camiseta: 16,
      posicion: "mediocampista",
      foto: "string",
    },
  ]
  delanteros: Jugador[] = [
    {
      nombre : "Ángel",
      apellido: "Di María",
      camiseta: 11,
      posicion: "delantero",
      foto: "string",
    },
    {
      nombre : "Lautaro",
      apellido: "Martínez",
      camiseta: 22,
      posicion: "delantero",
      foto: "string",
    },
    {
      nombre : "Julián",
      apellido: "Álvarez",
      camiseta: 9,
      posicion: "delantero",
      foto: "string",
    },
    {
      nombre : "Paulo",
      apellido: "Dybala",
      camiseta: 21,
      posicion: "delantero",
      foto: "string",
    },
    {
      nombre : "Ángel",
      apellido: "Correa",
      camiseta: 15,
      posicion: "delantero",
      foto: "string",
    },
    {
      nombre : "Lionel",
      apellido: "Messi",
      camiseta: 10,
      posicion: "delantero",
      foto: "string",
    },
  ]

}
