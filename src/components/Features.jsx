import FeatureVisual from "./FeatureVisual";
import { FEATURES } from "../data";

export default function Features() {
  return (
    <>
      {FEATURES.map((f, i) => (
        <section key={f.title} className={f.bg}>
          <div
            className={`mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-14 md:gap-16 ${
              i % 2 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="flex-1">
              <h2 className="text-2xl font-black md:text-3xl">{f.title}</h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-[#555]">{f.text}</p>
            </div>

            <div className="flex flex-1 justify-center">
              {f.image ? (
                <img
                  src={f.image}
                  alt={f.imageAlt}
                  loading="lazy"
                  className="w-full max-w-xl rounded-2xl"
                />
              ) : (
                <FeatureVisual type={f.visual} />
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
