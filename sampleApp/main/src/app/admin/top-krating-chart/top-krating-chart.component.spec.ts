import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopKRatingChartComponent } from './top-krating-chart.component';

describe('TopKRatingChartComponent', () => {
  let component: TopKRatingChartComponent;
  let fixture: ComponentFixture<TopKRatingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopKRatingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopKRatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
