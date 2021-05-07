import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatagogyComponent } from './product-catagogy.component';

describe('ProductCatagogyComponent', () => {
  let component: ProductCatagogyComponent;
  let fixture: ComponentFixture<ProductCatagogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCatagogyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatagogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
