import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UbicacionChoferPage } from './ubicacion-chofer.page';

describe('UbicacionChoferPage', () => {
  let component: UbicacionChoferPage;
  let fixture: ComponentFixture<UbicacionChoferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionChoferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
