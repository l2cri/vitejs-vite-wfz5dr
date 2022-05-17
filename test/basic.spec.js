import { describe, it } from 'vitest';

// All tests within this suite will be run in parallel
describe.concurrent('suite', () => {
  it('concurrent test 1', () => {
    expect(0).toBe(0);
  });
});
