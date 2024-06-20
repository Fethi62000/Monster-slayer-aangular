import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealbtnComponent } from './healbtn.component';

describe('HealbtnComponent', () => {
  let component: HealbtnComponent;
  let fixture: ComponentFixture<HealbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
