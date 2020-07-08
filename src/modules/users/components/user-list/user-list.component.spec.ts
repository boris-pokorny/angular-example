import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { UserListComponent } from './user-list.component';
import { ActivatedRoute } from '@angular/router';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let store: MockStore;
  const initialState = { user: { loading: false, list: { data: [] } } };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {},
            },
          },
        },
      ],
      declarations: [UserListComponent],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set loading flag', () => {
    expect(component.loading).toBeFalse();
    store.setState({ user: { loading: true } });
    expect(component.loading).toBeTrue();
  });

  it('should set users', () => {
    expect(component.users).toEqual([]);
  });
});
