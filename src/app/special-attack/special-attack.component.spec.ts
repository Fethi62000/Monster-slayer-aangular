import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialAttackComponent } from './special-attack.component';

describe('SpecialAttackComponent', () => {
  let component: SpecialAttackComponent;
  let fixture: ComponentFixture<SpecialAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialAttackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
