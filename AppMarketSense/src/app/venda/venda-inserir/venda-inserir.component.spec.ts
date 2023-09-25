import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendaInserirComponent } from './venda-inserir.component';

describe('VendaInserirComponent', () => {
  let component: VendaInserirComponent;
  let fixture: ComponentFixture<VendaInserirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VendaInserirComponent]
    });
    fixture = TestBed.createComponent(VendaInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
