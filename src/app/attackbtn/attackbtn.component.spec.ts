import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackbtnComponent } from './attackbtn.component';

describe('AttackbtnComponent', () => {
  let component: AttackbtnComponent;
  let fixture: ComponentFixture<AttackbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttackbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
