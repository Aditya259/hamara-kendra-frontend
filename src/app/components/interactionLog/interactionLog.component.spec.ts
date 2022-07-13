import { ComponentFixture, TestBed } from '@angular/core/testing';

import { interactionLogComponent } from './interactionLog.component';

describe('AdminsComponent', () => {
  let component: interactionLogComponent;
  let fixture: ComponentFixture<interactionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ interactionLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(interactionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
