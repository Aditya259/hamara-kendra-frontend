import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateDescriptionsComponent } from './insert-update-descriptions.component';

describe('InsertUpdateDescriptionsComponent', () => {
  let component: InsertUpdateDescriptionsComponent;
  let fixture: ComponentFixture<InsertUpdateDescriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUpdateDescriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
