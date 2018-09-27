import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermainpageComponent } from './usermainpage.component';

describe('UsermainpageComponent', () => {
  let component: UsermainpageComponent;
  let fixture: ComponentFixture<UsermainpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermainpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
