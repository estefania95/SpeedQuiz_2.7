import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatoliComponent } from './ratoli.component';

describe('RatoliComponent', () => {
  let component: RatoliComponent;
  let fixture: ComponentFixture<RatoliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatoliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
