import { useEffect, useRef, useState } from "react";

export default function useGooeyMenu() {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const hamburger = menu.querySelector(".hamburger");
    const blobPath = menu.querySelector("#blob-path");

    // 漢堡選單點擊切換 open 狀態
    const handleClick = () => setOpen(prev => !prev);
    hamburger.addEventListener("click", handleClick);

    // blob 路徑變化動畫
    let frame;
    const animateBlob = () => {
      if (!blobPath) return;
      const time = Date.now() / 1000;
      const wave = Math.sin(time * 2) * 10; // 調整振幅
      blobPath.setAttribute(
        "d",
        `M60,500H0V0h60c0,0,20,${172 + wave},20,250S60,900,60,500z`
      );
      frame = requestAnimationFrame(animateBlob);
    };
    frame = requestAnimationFrame(animateBlob);

    return () => {
      hamburger.removeEventListener("click", handleClick);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { menuRef, open, setOpen };
}