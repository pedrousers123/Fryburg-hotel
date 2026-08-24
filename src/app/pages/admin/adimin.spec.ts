import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adimin } from './adimin';

describe('Adimin', () => {
  let component: Adimin;
  let fixture: ComponentFixture<Adimin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adimin],
    }).compileComponents();

    fixture = TestBed.createComponent(Adimin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
