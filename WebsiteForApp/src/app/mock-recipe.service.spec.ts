import { TestBed } from '@angular/core/testing';

import { MockRecipeService } from './mock-recipe.service';

describe('MockRecipeService', () => {
  let service: MockRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
