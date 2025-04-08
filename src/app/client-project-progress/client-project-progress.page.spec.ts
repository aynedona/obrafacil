import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientProjectProgressPage } from './client-project-progress.page';

describe('ClientProjectProgressPage', () => {
  let component: ClientProjectProgressPage;
  let fixture: ComponentFixture<ClientProjectProgressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProjectProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
