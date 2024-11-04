import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Coches} from '../coches';
import { CochesListComponent } from './coches-list.component';
import {CochesService} from '../coches.service';
import { of, throwError } from 'rxjs';
import {By} from '@angular/platform-browser';

describe('CochesListComponent', () => {
  let component: CochesListComponent;
  let fixture: ComponentFixture<CochesListComponent>;
  let mockCochesService: jasmine.SpyObj<CochesService>;

  beforeEach(async () => {
    mockCochesService = jasmine.createSpyObj('CochesService', ['getCoches']);

    TestBed.configureTestingModule({
      declarations: [CochesListComponent],
      providers: [
        {provide: CochesService, useValue: mockCochesService},
      ]
    });


    fixture = TestBed.createComponent(CochesListComponent);
    component = fixture.componentInstance;

    const mockCoches: Coches[] = [
      new Coches(
        {
          id:1,
          marca:"Renault",
          linea:"Kangoo",
          referencia:"VU Express",
          modelo:2017,
          kilometraje:93272,
          color:"Blanco",
          image:"https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg",
        }),
      new Coches(
        {
          id:2,
          marca:"Renault",
          linea:"Kangoo",
          referencia:"VU Express",
          modelo:2017,
          kilometraje:93272,
          color:"Blanco",
          image:"https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg",
        }),
      new Coches(
        {
          id:3,
          marca:"Renault",
          linea:"Kangoo",
          referencia:"VU Express",
          modelo:2017,
          kilometraje:93272,
          color:"Blanco",
          image:"https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg",
        })
    ];

    mockCochesService.getCoches.and.returnValue(of(mockCoches));
    component.ngOnInit();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should receive 3 movies', () => {
    expect(component.data.length).toBe(3);
  });

  it('should create 1 table', () => {
    const headers = fixture.nativeElement.querySelectorAll('table');
    expect(headers.length).toBe(1);

  });

  it('should have 1 header', () => {
    const headers = fixture.nativeElement.querySelectorAll('thead tr');
    expect(headers.length).toBe(1);
  });

  it('should have 4 headers', () => {
    const headers = fixture.debugElement.queryAll(By.css('th'));
    expect(headers.length).toBe(4);
  });

  it('should have 3 rows', () => {
    const headers = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(headers.length).toBe(3);
  });

});
