import {Component, OnInit} from '@angular/core';
import {CochesService} from '../coches.service';
import {Coches} from '../coches';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrl: './coches-list.component.css'
})
export class CochesListComponent  implements OnInit {
  data:Coches[] = [];


  constructor(private cochesService: CochesService) {

  }
  ngOnInit():void {
    this.getCoches();
  }

  getCoches():void{
    this.cochesService.getCoches().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data',error);
      }

    );
  }

  countValues(data:Coches[]): { marca: string; count: number }[] {
    interface marcaCount{
      marca: string;
      count: number;
    }

    let ArrayCount: marcaCount[] = [];

    data.forEach((item:any)=>{
      let Index: number = ArrayCount.findIndex( marcaCount => marcaCount.marca === item.marca);
      if( Index !== -1 ){
        ArrayCount[Index]['count'] = ArrayCount[Index]['count'] + 1;
      } else {
        ArrayCount.push({marca: item.marca, count: 1});
      }
    })

    return ArrayCount;

  }

  protected readonly Coches = Coches;
}
