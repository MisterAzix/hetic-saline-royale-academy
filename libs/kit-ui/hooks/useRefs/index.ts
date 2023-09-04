import { createRef, useRef } from 'react';

function generateRefs<T>(length: number) {
  return [...Array(length)].map(() => createRef<T>());
}

export function useRefs<T>(length: number) {
  const prevLength = useRef<number>(length);
  const refs = useRef(generateRefs<T>(length));

  if (length !== prevLength.current) {
    if (length > prevLength.current) {
      refs.current = [
        ...refs.current,
        ...generateRefs<T>(length - prevLength.current),
      ];
    } else if (length < prevLength.current) {
      if (length === 0) {
        refs.current = [];
      } else {
        refs.current = [...refs.current.slice(0, length)];
      }
    }
    prevLength.current = length;
  }

  return refs;
}
