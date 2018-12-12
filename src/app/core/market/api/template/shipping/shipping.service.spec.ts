import { TestBed, inject } from '@angular/core/testing';

import { ShippingService } from './shipping.service';
import { MarketModule } from 'app/core/market/market.module';

describe('ShippingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MarketModule.forRoot()
      ],
      providers: [ShippingService]
    });
  });

  it('should be created', inject([ShippingService], (service: ShippingService) => {
    expect(service).toBeTruthy();
  }));
});
