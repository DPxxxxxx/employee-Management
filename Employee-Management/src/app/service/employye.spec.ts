import { TestBed } from '@angular/core/testing';

import { Employye } from './employye';

describe('Employye', () => {
  let service: Employye;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employye);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
