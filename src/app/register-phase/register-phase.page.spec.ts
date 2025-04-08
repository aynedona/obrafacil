import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPhasePage } from './register-phase.page';

describe('RegisterPhasePage', () => {
  let component: RegisterPhasePage;
  let fixture: ComponentFixture<RegisterPhasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPhasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
