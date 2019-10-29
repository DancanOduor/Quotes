import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlitDirectiveComponent } from './highlit-directive.component';

describe('HighlitDirectiveComponent', () => {
  let component: HighlitDirectiveComponent;
  let fixture: ComponentFixture<HighlitDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlitDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlitDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
