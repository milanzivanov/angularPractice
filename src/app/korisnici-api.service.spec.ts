import { TestBed, inject } from '@angular/core/testing';

import { KorisniciApiService } from './korisnici-api.service';

describe('KorisniciApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KorisniciApiService]
    });
  });

  it('should be created', inject([KorisniciApiService], (service: KorisniciApiService) => {
    expect(service).toBeTruthy();
  }));
});
