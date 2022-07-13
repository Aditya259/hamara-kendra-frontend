import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationOnOffComponent } from './location-on-off.component';

describe('LocationOnOffComponent', () => {
  let component: LocationOnOffComponent;
  let fixture: ComponentFixture<LocationOnOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationOnOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
