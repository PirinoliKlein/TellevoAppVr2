import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterfacesPage } from './interfaces.page';

describe('InterfacesPage', () => {
  let component: InterfacesPage;
  let fixture: ComponentFixture<InterfacesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
