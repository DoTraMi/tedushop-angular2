import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategogyComponent } from './product-categogy.component';

describe('ProductCategogyComponent', () => {
  let component: ProductCategogyComponent;
  let fixture: ComponentFixture<ProductCategogyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategogyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
