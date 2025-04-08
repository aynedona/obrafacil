import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientPaymentsPage } from './client-payments.page';

describe('ClientPaymentsPage', () => {
  let component: ClientPaymentsPage;
  let fixture: ComponentFixture<ClientPaymentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
