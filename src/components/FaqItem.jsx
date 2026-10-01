import { useState } from "react";

export default function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#ddd]">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-lg font-bold text-[#333] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1368CE]/40"
      >
        {q}
        <span className={`text-2xl text-[#46178F] transition-transform ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="pb-5 leading-relaxed text-[#555]">{a}</p>}
    </div>
  );
}
