import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import { NAV } from "../data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-[#eee] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />

        <div className="hidden items-center gap-5 text-sm font-bold md:flex">
          <a href="https://create.kahoot.it/discover" className="hover:text-[#46178F]">Explore Content</a>
          <a href="https://kahoot.it/" className="hover:text-[#46178F]">Join</a>
          <a href="https://create.kahoot.it/after/login" className="hover:text-[#46178F]">Log in</a>
          <Button href="https://create.kahoot.it/auth/register" size="sm">Start for FREE</Button>
        </div>

        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      <nav className={`border-t border-[#eee] ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="mx-auto flex max-w-6xl flex-col px-4 md:flex-row md:gap-8">
          {NAV.map((n) => (
            <li key={n.label}>
              <a href={n.href} className="block py-3 text-sm font-bold hover:text-[#46178F]">
                {n.label}
              </a>
            </li>
          ))}
          <li className="md:hidden">
            <a href="https://kahoot.it/" className="block py-3 text-sm font-bold">Join</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
