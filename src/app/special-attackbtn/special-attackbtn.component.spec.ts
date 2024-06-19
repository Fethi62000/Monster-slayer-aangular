import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAttackbtnComponent } from './special-attackbtn.component';

describe('SpecialAttackbtnComponent', () => {
  let component: SpecialAttackbtnComponent;
  let fixture: ComponentFixture<SpecialAttackbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialAttackbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAttackbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
