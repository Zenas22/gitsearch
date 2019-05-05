import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatuComponent } from './watu.component';

describe('WatuComponent', () => {
  let component: WatuComponent;
  let fixture: ComponentFixture<WatuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
