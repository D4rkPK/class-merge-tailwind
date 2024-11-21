import { TestBed } from '@angular/core/testing';

import { BiClassMergeTailwindService } from './bi-class-merge-tailwind.service';

describe('BiClassMergeTailwindService', () => {
  let service: BiClassMergeTailwindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiClassMergeTailwindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
