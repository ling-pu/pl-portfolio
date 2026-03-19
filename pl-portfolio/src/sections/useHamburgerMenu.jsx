import { useState, useRef, useEffect } from "react";

export function useHamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!menuRef.current) return;
  
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
  
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    menuRef,
  };
}