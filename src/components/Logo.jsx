export default function Logo({ dark = false }) {
  return (
    <a href="https://kahoot.com/" className="flex items-center gap-1.5" aria-label="Kahoot! home">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-[#46178F] text-lg font-black text-white">
        K!
      </span>
      <span className={`text-xl font-black tracking-tight ${dark ? "text-white" : "text-[#46178F]"}`}>
        Kahoot!
      </span>
    </a>
  );
}
