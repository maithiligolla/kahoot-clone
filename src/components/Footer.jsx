import Logo from "./Logo";
import { FOOTER_LINKS, SOCIALS } from "../data";

export default function Footer({ onOpenSettings }) {
  return (
    <footer className="bg-[#2a0d57] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 font-black">{title}</h3>
              <ul className="space-y-2 text-sm opacity-90">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-6">
          <Logo dark />
          <div className="flex gap-4 text-sm font-bold">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="hover:underline">{s}</a>
            ))}
          </div>
          <button
            onClick={onOpenSettings}
            className="rounded-lg border border-white/40 px-4 py-2 text-sm font-bold hover:bg-white/10"
          >
            Region, language &amp; currency
          </button>
        </div>
        <p className="mt-6 text-sm opacity-70">Copyright © 2026, Kahoot! All Rights Reserved.</p>
      </div>
    </footer>
  );
}
