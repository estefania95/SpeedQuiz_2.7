import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulellPreguntesComponent } from './taulell-preguntes.component';

describe('TaulellPreguntesComponent', () => {
  let component: TaulellPreguntesComponent;
  let fixture: ComponentFixture<TaulellPreguntesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulellPreguntesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaulellPreguntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
