import { TestBed } from '@angular/core/testing';

import { TariffsDataService } from './tariffs-data.service';

describe('TariffsDataService', () => {
  let service: TariffsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
