import { ComponentFixture, TestBed } from '@angular/core/testing';


import { actualizarProductoComponent } from './actualizar-producto.component';

describe('ActualizarProductoComponent', () => {
  let component: actualizarProductoComponent;
  let fixture: ComponentFixture<actualizarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ actualizarProductoComponent ]
    })
  })
})


describe('actualizarProductoComponent', () => {
  let component: actualizarProductoComponent;
  let fixture: ComponentFixture<actualizarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ actualizarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(actualizarProductoComponent);
    fixture = TestBed.createComponent(actualizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
