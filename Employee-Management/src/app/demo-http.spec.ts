import { TestBed } from '@angular/core/testing';

import { DemoHttp } from './demo-http';

describe('DemoHttp', () => {
  let service: DemoHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
