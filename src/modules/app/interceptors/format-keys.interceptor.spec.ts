import { TestBed } from '@angular/core/testing';

import { FormatKeysInterceptor } from './format-keys.interceptor';

describe('FormatKeysInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FormatKeysInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FormatKeysInterceptor = TestBed.inject(FormatKeysInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
