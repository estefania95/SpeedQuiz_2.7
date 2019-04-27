import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacioComponent } from './puntuacio.component';

describe('PuntuacioComponent', () => {
  let component: PuntuacioComponent;
  let fixture: ComponentFixture<PuntuacioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntuacioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
