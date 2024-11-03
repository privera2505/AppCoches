import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CochesListComponent} from './coches-list/coches-list.component';
import {CochesService} from './coches.service';



@NgModule({
  declarations: [
    CochesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CochesListComponent],
  providers: [CochesService]
})
export class CochesModule { }
