import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flip7Component } from './flip7.component';

describe('Flip7Component', () => {
  let component: Flip7Component;
  let fixture: ComponentFixture<Flip7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Flip7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flip7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
