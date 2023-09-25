import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaEditarComponent } from './venda-editar.component';

describe('VendaEditarComponent', () => {
  let component: VendaEditarComponent;
  let fixture: ComponentFixture<VendaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaEditarComponent]
    });
    fixture = TestBed.createComponent(VendaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
