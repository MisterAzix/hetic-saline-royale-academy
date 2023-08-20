import { useCallback, useState } from 'react';

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, onOpen, onClose };
};
