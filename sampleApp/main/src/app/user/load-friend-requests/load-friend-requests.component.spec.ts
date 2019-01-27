import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFriendRequestsComponent } from './load-friend-requests.component';

describe('LoadFriendRequestsComponent', () => {
  let component: LoadFriendRequestsComponent;
  let fixture: ComponentFixture<LoadFriendRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFriendRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFriendRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
