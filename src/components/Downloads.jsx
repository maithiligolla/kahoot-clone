import StoreBadges from "./StoreBadges";
import { STORES } from "../data";

export default function Downloads() {
  return (
    <section id="apps" className="scroll-mt-28 bg-[#46178F] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-black">
            Download the Kahoot! app for free and play across all your devices!
          </h2>
          <p className="mb-6 mt-3 text-lg">One app, unlimited fun</p>
          <StoreBadges links={STORES.app} />
        </div>
        <img
          src="https://kahoot.com/files/2026/06/Frame-1171275920.png"
          alt="Kahoot! app"
          className="w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
