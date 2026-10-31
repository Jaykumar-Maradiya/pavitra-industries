import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/utils';

describe('lib/utils - cn()', () => {
  it('combines simple class names', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2');
  });

  it('handles conditional expressions and boolean flags', () => {
    const isPrimary = true;
    const isSecondary = false;
    expect(
      cn(
        'btn',
        isPrimary && 'btn-primary',
        isSecondary && 'btn-secondary',
        undefined,
        null,
        false
      )
    ).toBe('btn btn-primary');
  });

  it('resolves conflicting Tailwind CSS utility classes', () => {
    // tailwind-merge resolves p-2 vs p-4 to p-4
    expect(cn('p-2', 'p-4')).toBe('p-4');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('bg-white text-black', 'bg-neutral-900 text-white')).toBe('bg-neutral-900 text-white');
  });

  it('handles empty strings and arrays', () => {
    expect(cn('')).toBe('');
    expect(cn(['flex', 'items-center'], ['justify-between'])).toBe('flex items-center justify-between');
  });
});
