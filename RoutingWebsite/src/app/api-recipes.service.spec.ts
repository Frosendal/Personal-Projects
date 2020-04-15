import { TestBed } from '@angular/core/testing';

import { APIRecipesService } from './api-recipes.service';

describe('APIRecipesService', () => {
  let service: APIRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
