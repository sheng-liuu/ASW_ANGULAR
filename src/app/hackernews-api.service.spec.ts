import { TestBed } from '@angular/core/testing';

import { HackerNewsAPIService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  let service: HackerNewsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerNewsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
