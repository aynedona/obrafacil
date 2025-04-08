import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterManagerPage } from './register-manager.page';

describe('RegisterManagerPage', () => {
  let component: RegisterManagerPage;
  let fixture: ComponentFixture<RegisterManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
