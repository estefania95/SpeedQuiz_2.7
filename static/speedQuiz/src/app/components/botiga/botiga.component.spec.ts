import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotigaComponent } from './botiga.component';

describe('BotigaComponent', () => {
  let component: BotigaComponent;
  let fixture: ComponentFixture<BotigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
