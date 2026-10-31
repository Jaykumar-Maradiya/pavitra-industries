import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { reducer, useToast, toast } from '@/hooks/use-toast';

describe('hooks/use-toast', () => {
  describe('reducer', () => {
    it('handles ADD_TOAST and limits toasts to TOAST_LIMIT (1)', () => {
      const initialState = { toasts: [] };
      const toast1 = { id: '1', title: 'First Toast', open: true };
      const toast2 = { id: '2', title: 'Second Toast', open: true };

      const state1 = reducer(initialState, { type: 'ADD_TOAST', toast: toast1 });
      expect(state1.toasts).toHaveLength(1);
      expect(state1.toasts[0].id).toBe('1');

      const state2 = reducer(state1, { type: 'ADD_TOAST', toast: toast2 });
      expect(state2.toasts).toHaveLength(1);
      expect(state2.toasts[0].id).toBe('2');
    });

    it('handles UPDATE_TOAST for existing toast', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Initial Title', open: true }],
      };
      const updatedState = reducer(initialState, {
        type: 'UPDATE_TOAST',
        toast: { id: '1', title: 'Updated Title' },
      });
      expect(updatedState.toasts[0].title).toBe('Updated Title');
    });

    it('handles DISMISS_TOAST for specific toastId', () => {
      const initialState = {
        toasts: [{ id: '1', title: 'Toast 1', open: true }],
      };
      const state = reducer(initialState, {
        type: 'DISMISS_TOAST',
        toastId: '1',
      });
      expect(state.toasts[0].open).toBe(false);
    });

    it('handles REMOVE_TOAST for specific toastId and undefined (clear all)', () => {
      const initialState = {
        toasts: [
          { id: '1', title: 'Toast 1', open: false },
          { id: '2', title: 'Toast 2', open: false },
        ],
      };
      const stateAfterRemoving1 = reducer(initialState, {
        type: 'REMOVE_TOAST',
        toastId: '1',
      });
      expect(stateAfterRemoving1.toasts).toHaveLength(1);
      expect(stateAfterRemoving1.toasts[0].id).toBe('2');

      const stateAfterClear = reducer(stateAfterRemoving1, {
        type: 'REMOVE_TOAST',
        toastId: undefined,
      });
      expect(stateAfterClear.toasts).toEqual([]);
    });
  });

  describe('useToast hook & toast helper', () => {
    it('dispatches a new toast using toast() and reads it via useToast', () => {
      const { result } = renderHook(() => useToast());

      act(() => {
        toast({ title: 'New Message', description: 'Test description' });
      });

      expect(result.current.toasts.length).toBeGreaterThan(0);
      expect(result.current.toasts[0].title).toBe('New Message');
      expect(result.current.toasts[0].description).toBe('Test description');
    });

    it('dismisses toast using returned dismiss function', () => {
      const { result } = renderHook(() => useToast());

      let createdToast: ReturnType<typeof toast>;
      act(() => {
        createdToast = toast({ title: 'To Dismiss' });
      });

      expect(result.current.toasts[0].open).toBe(true);

      act(() => {
        createdToast.dismiss();
      });

      expect(result.current.toasts[0].open).toBe(false);
    });
  });
});
