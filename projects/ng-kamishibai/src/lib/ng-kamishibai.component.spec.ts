import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgKamishibaiComponent } from './ng-kamishibai.component';

describe('NgKamishibaiComponent', () => {
  let component: NgKamishibaiComponent;
  let fixture: ComponentFixture<NgKamishibaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgKamishibaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgKamishibaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
