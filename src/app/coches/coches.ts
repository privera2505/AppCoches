export class Coches {
  id:number;
  marca:string;
  linea:string;
  referencia:string;
  modelo:number;
  kilometraje:number;
  color:string;
  image:string;
  constructor(cochesData:{
    "id":number;
    "marca":string;
    "linea":string;
    "referencia":string;
    "modelo":number;
    "kilometraje":number;
    "color":string;
    "image":string;
  }){
    this.id = cochesData.id;
    this.marca = cochesData.marca;
    this.linea = cochesData.linea;
    this.referencia = cochesData.referencia;
    this.modelo = cochesData.modelo;
    this.kilometraje = cochesData.kilometraje;
    this.color = cochesData.color;
    this.image = cochesData.image;
  }
}
