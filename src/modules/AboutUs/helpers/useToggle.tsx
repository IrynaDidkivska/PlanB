import { useState } from 'react';

function useToggle(): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleButton = () => setIsOpen(prev => !prev);

  return [isOpen, toggleButton];
}

export default useToggle;
