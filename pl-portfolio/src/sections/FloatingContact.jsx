import { useState, useEffect } from "react";

export default function FloatingContact() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 控制浮動按鈕顯示
  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth <= 768) { // 手機
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY + 50) {
          setShow(true); // 往下滑出現
        } else if (currentScrollY < lastScrollY) {
          setShow(false); // 往上滑收回
        }
        setLastScrollY(currentScrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed bottom-4 left-0 z-50">
      {/* 浮動按鈕 */}
      <button
        className={`contact-icon ${show ? "show" : ""} ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(prev => !prev)}
      >
        Contact
      </button>

      {/* 展開選單 */}
      {menuOpen && (
        <div className="contact-menu">
          <a href="mailto:lingpu@example.com">Email</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="#contact">Form</a>
        </div>
      )}
    </div>
  );
}
