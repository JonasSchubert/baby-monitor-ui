import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LullabyComponent } from './lullaby.component';

describe('LullabyComponent', () => {
  let component: LullabyComponent;
  let fixture: ComponentFixture<LullabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LullabyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LullabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
