import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowALlComponent } from './product-show-all.component';

describe('ProductShowALlComponent', () => {
  let component: ProductShowALlComponent;
  let fixture: ComponentFixture<ProductShowALlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShowALlComponent]
    });
    fixture = TestBed.createComponent(ProductShowALlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
