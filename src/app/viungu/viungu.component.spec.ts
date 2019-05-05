import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViunguComponent } from './viungu.component';

describe('ViunguComponent', () => {
  let component: ViunguComponent;
  let fixture: ComponentFixture<ViunguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViunguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViunguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
