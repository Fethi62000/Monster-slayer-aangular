import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveUpbtnComponent } from './give-upbtn.component';

describe('GiveUpbtnComponent', () => {
  let component: GiveUpbtnComponent;
  let fixture: ComponentFixture<GiveUpbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiveUpbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiveUpbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
