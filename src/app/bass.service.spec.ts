import { TestBed, inject } from '@angular/core/testing';

import { BassService } from './bass.service';

describe('StringsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BassService]
    });
  });

  it('should be created', inject([BassService], (service: BassService) => {
    expect(service).toBeTruthy();
  }));
});
