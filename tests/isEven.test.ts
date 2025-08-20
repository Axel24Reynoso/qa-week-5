import { describe, it, expect } from 'vitest';
import { isEven } from '../src/isEven';

describe('isEven', () => {
  it('retorna true para números pares', () => {
    expect(isEven(4)).toBe(true);
  });

  it('retorna false para números impares', () => {
    expect(isEven(7)).toBe(false);
  });
});
