import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterProjectPage } from './register-project.page';

describe('RegisterProjectPage', () => {
  let component: RegisterProjectPage;
  let fixture: ComponentFixture<RegisterProjectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
