import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreProductsPopupComponent } from './add-more-products-popup.component';

describe('AddMoreProductsPopupComponent', () => {
  let component: AddMoreProductsPopupComponent;
  let fixture: ComponentFixture<AddMoreProductsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMoreProductsPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMoreProductsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
