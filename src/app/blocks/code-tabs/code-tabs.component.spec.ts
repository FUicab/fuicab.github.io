import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeTabsComponent } from './code-tabs.component';

describe('CodeTabsComponent', () => {
  let component: CodeTabsComponent;
  let fixture: ComponentFixture<CodeTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeTabsComponent]
    });
    fixture = TestBed.createComponent(CodeTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
