import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoEditarComponent } from './produto-editar.component';

describe('ProdutoEditarComponent', () => {
  let component: ProdutoEditarComponent;
  let fixture: ComponentFixture<ProdutoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoEditarComponent]
    });
    fixture = TestBed.createComponent(ProdutoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
