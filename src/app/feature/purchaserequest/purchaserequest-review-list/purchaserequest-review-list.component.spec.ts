import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestReviewListComponent } from './purchaserequest-review-list.component';

describe('PurchaserequestReviewListComponent', () => {
  let component: PurchaserequestReviewListComponent;
  let fixture: ComponentFixture<PurchaserequestReviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestReviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestReviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
