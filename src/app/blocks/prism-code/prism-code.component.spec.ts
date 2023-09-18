import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismCodeComponent } from './prism-code.component';

describe('PrismCodeComponent', () => {
  let component: PrismCodeComponent;
  let fixture: ComponentFixture<PrismCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrismCodeComponent]
    });
    fixture = TestBed.createComponent(PrismCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
