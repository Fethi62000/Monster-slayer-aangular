import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconpictureComponent } from './iconpicture.component';

describe('IconpictureComponent', () => {
  let component: IconpictureComponent;
  let fixture: ComponentFixture<IconpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconpictureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
