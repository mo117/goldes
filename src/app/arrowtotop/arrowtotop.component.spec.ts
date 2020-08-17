import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowtotopComponent } from './arrowtotop.component';

describe('ArrowtotopComponent', () => {
  let component: ArrowtotopComponent;
  let fixture: ComponentFixture<ArrowtotopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowtotopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowtotopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
