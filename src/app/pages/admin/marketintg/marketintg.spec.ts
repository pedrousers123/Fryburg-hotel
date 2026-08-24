import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Marketintg } from './marketintg';

describe('Marketintg', () => {
  let component: Marketintg;
  let fixture: ComponentFixture<Marketintg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Marketintg],
    }).compileComponents();

    fixture = TestBed.createComponent(Marketintg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
