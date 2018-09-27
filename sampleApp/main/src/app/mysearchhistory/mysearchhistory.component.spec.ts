import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysearchhistoryComponent } from './mysearchhistory.component';

describe('MysearchhistoryComponent', () => {
  let component: MysearchhistoryComponent;
  let fixture: ComponentFixture<MysearchhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysearchhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysearchhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
