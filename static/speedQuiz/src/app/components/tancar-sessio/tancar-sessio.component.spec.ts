import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TancarSessioComponent } from './tancar-sessio.component';

describe('TancarSessioComponent', () => {
  let component: TancarSessioComponent;
  let fixture: ComponentFixture<TancarSessioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TancarSessioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TancarSessioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
