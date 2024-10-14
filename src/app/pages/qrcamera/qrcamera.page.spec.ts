import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QrcameraPage } from './qrcamera.page';

describe('QrcameraPage', () => {
  let component: QrcameraPage;
  let fixture: ComponentFixture<QrcameraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QrcameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
