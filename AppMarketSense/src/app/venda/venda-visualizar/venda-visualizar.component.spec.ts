import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaVisualizarComponent } from './venda-visualizar.component';

describe('VendaVisualizarComponent', () => {
  let component: VendaVisualizarComponent;
  let fixture: ComponentFixture<VendaVisualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaVisualizarComponent]
    });
    fixture = TestBed.createComponent(VendaVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
