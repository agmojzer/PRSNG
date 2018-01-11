import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewDetailComponent } from './purchaserequest-review-detail.component';

describe('PurchaserequestReviewDetailComponent', () => {
  let component: PurchaserequestReviewDetailComponent;
  let fixture: ComponentFixture<PurchaserequestReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
