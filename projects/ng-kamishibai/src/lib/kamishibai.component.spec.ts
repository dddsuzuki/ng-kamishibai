import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KamishibaiComponent } from './kamishibai.component';

describe('KamishibaiComponent', () => {
  let component: KamishibaiComponent;
  let fixture: ComponentFixture<KamishibaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KamishibaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KamishibaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
