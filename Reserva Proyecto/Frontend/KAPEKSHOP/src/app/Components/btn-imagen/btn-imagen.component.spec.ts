import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnImagenComponent } from './btn-imagen.component';

describe('BtnImagenComponent', () => {
  let component: BtnImagenComponent;
  let fixture: ComponentFixture<BtnImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
