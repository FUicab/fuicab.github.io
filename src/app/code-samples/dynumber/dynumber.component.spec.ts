import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynumberComponent } from './dynumber.component';

describe('DynumberComponent', () => {
  let component: DynumberComponent;
  let fixture: ComponentFixture<DynumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynumberComponent]
    });
    fixture = TestBed.createComponent(DynumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
