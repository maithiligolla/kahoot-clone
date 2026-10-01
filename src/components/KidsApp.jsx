import StoreBadges from "./StoreBadges";
import { STORES } from "../data";

export default function KidsApp() {
  return (
    <section className="bg-[#F2F2F2]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <img
          src="https://kahoot.com/files/2026/06/image-455.png"
          alt="Kahoot! Kids app"
          className="order-2 w-full rounded-2xl md:order-1"
        />
        <div className="order-1 text-center md:order-2 md:text-left">
          <h2 className="text-3xl font-black">Download the Kids version of the Kahoot! app.</h2>
          <p className="mb-6 mt-3 text-lg">Kahoot! Kids: Learn and Play</p>
          <StoreBadges links={STORES.kids} />
        </div>
      </div>
    </section>
  );
}
