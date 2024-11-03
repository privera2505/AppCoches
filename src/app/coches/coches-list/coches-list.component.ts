import {Component, OnInit} from '@angular/core';
import {CochesService} from '../coches.service';
import {BaseListComponent} from '../../utilities/baseListComponent';
import {Coches} from '../coches';

@Component({
  selector: 'app-coches-list',
  templateUrl: './coches-list.component.html',
  styleUrl: './coches-list.component.css'
})
export class CochesListComponent extends BaseListComponent<Coches> implements OnInit {

  constructor(private cochesService: CochesService) {
    super();
  }
  ngOnInit():void {
    this.getCoches();
  }

  getCoches():void{
    this.cochesService.getCoches().subscribe();
  }

  protected readonly Coches = Coches;
}
