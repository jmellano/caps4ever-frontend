import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRankingComponent } from './donation-ranking.component';

describe('DonationRankingComponent', () => {
  let component: DonationRankingComponent;
  let fixture: ComponentFixture<DonationRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
