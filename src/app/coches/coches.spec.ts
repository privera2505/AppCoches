import { Coches } from './coches';

describe('Coches', () => {
  let coches: Coches;


  beforeEach(() => {
    coches = new Coches({
      id:1,
      marca:"Renault",
      linea:"Kangoo",
      referencia:"VU Express",
      modelo:2017,
      kilometraje:93272,
      color:"Blanco",
      image:"https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg",
    });
  })


  it('should create an instance', () => {
    expect(coches).toBeTruthy();
  });
});
