import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatchaicomponentComponent } from './chatchaicomponent.component';

describe('ChatchaicomponentComponent', () => {
  let component: ChatchaicomponentComponent;
  let fixture: ComponentFixture<ChatchaicomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatchaicomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatchaicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
