import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JBComponent } from './j-b.component';

describe('JBComponent', () => {
  let component: JBComponent;
  let fixture: ComponentFixture<JBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
