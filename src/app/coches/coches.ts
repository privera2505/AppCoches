export class Coches {
  id:string;
  marca:string;
  linea:string;
  referencia:string;
  modelo:string;
  kilometraje:string;
  color:string;
  image:string;
  constructor(cochesData:{
    "id":string;
    "marca":string;
    "linea":string;
    "referencia":string;
    "modelo":string;
    "kilometraje":string;
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
