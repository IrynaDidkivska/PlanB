import { useState } from 'react';

function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => setIsOpen(prev => !prev);

  return [isOpen, toggleButton];
}

export default useToggle;
