import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterMaterialPage } from './register-material.page';

describe('RegisterMaterialPage', () => {
  let component: RegisterMaterialPage;
  let fixture: ComponentFixture<RegisterMaterialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMaterialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
