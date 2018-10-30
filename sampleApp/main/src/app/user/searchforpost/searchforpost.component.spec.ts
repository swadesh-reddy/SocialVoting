import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforpostComponent } from './searchforpost.component';

describe('SearchforpostComponent', () => {
  let component: SearchforpostComponent;
  let fixture: ComponentFixture<SearchforpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchforpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
