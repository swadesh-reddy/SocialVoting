import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TophitkrateComponent } from './tophitkrate.component';

describe('TophitkrateComponent', () => {
  let component: TophitkrateComponent;
  let fixture: ComponentFixture<TophitkrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TophitkrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TophitkrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
