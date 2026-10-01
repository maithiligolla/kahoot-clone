import { CELEBRATIONS } from "../data";

export default function Celebrations() {
  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-8 text-3xl font-black">Bring fun to more special occasions with Kahoot!+</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CELEBRATIONS.map((c) => (
            <a key={c.label} href={c.href} className="group overflow-hidden rounded-2xl bg-white shadow-md">
              <img src={c.img} alt={c.label} className="aspect-[4/3] w-full object-cover" />
              <p className="p-4 text-lg font-black text-[#46178F] group-hover:underline">{c.label}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
