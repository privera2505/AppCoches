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

  protected readonly Coches = Coches;
}
