import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorBoundary } from '@/components/error-boundary';

function ProblemChild({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Exploded in test');
  }
  return <div>Everything is working fine</div>;
}

describe('components/error-boundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Everything is working fine')).toBeInTheDocument();
  });

  it('renders fallback UI when a child component throws', () => {
    // Suppress console.error during expected throw
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/Exploded in test/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();

    spy.mockRestore();
  });

  it('allows retrying via Try Again button', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    let throwError = true;
    function DynamicChild() {
      if (throwError) throw new Error('Dynamic failure');
      return <div>Recovered Successfully</div>;
    }

    const { rerender } = render(
      <ErrorBoundary>
        <DynamicChild />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    throwError = false;
    fireEvent.click(screen.getByRole('button', { name: /try again/i }));

    expect(screen.getByText('Recovered Successfully')).toBeInTheDocument();

    spy.mockRestore();
  });

  it('supports custom FallbackComponent', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    function CustomFallback({ error, resetError }: { error: Error; resetError: () => void }) {
      return (
        <div>
          <span>Custom error: {error.message}</span>
          <button onClick={resetError}>Custom Retry</button>
        </div>
      );
    }

    render(
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error: Exploded in test')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Custom Retry' })).toBeInTheDocument();

    spy.mockRestore();
  });
});
