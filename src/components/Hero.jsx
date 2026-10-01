import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-[#46178F] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Kahoot! app: quiz and trivia game for iPhone and Android
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Create quiz games, host trivia nights, and learn something new with the Kahoot! app.
            Make your lessons, presentations or gatherings more engaging!
          </p>
          <p className="mt-6 font-bold">Kahoot!+ the best way to learn and play.</p>
          <p className="mt-1 text-sm opacity-90">
            Get Kahoot!+ from $3/mo. Save 20%. Offer ends October 1.
          </p>
          <Button href="#apps" variant="light" className="mt-6">
            Get started
          </Button>
        </div>
        <img
          src="https://kahoot.com/files/2026/05/2605_Revamp_At-home_Kahoot-app_hero-img.png"
          alt="Kahoot! app on a phone"
          className="w-full rounded-2xl"
        />
      </div>
    </section>
  );
}
