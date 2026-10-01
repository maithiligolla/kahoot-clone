import AnswerGrid from "./AnswerGrid";

const PLAYER_COLORS = ["bg-[#E21B3C]", "bg-[#1368CE]", "bg-[#D89E00]", "bg-[#26890C]"];
const PLAYERS = ["Mia", "Rahul", "Zoe", "Kenji", "Ava", "Leo", "Nina", "Sam", "Ola"];

// Small illustrative panels for each feature section, built in JSX.
export default function FeatureVisual({ type }) {
  if (type === "create") {
    return (
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
        <p className="mb-3 rounded-lg bg-[#F2F2F2] px-4 py-3 text-center font-bold text-[#333]">
          Which inside joke wins game night?
        </p>
        <AnswerGrid labels={["The llama", "Grandma’s soup", "Tuesday hat", "Blue sock"]} />
      </div>
    );
  }

  if (type === "host") {
    return (
      <div className="w-full max-w-md rounded-2xl bg-[#46178F] p-6 text-white shadow-xl">
        <p className="text-center text-sm font-semibold opacity-80">Join at kahoot.it</p>
        <p className="mb-4 text-center text-lg font-black">Share the PIN</p>
        <div className="flex flex-wrap justify-center gap-2">
          {PLAYERS.map((name, i) => (
            <span key={name} className={`rounded-full px-3 py-1 text-sm font-bold ${PLAYER_COLORS[i % 4]}`}>
              {name}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-sm font-semibold">{PLAYERS.length} players joined</p>
      </div>
    );
  }

  if (type === "play") {
    return (
      <div className="w-full max-w-md rounded-2xl bg-[#46178F] p-6 text-center text-white shadow-xl">
        <p className="text-sm font-semibold opacity-80">Game PIN</p>
        <p className="mb-5 text-5xl font-black tracking-widest">815493</p>
        <AnswerGrid labels={["", "", "", ""]} />
      </div>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
      <div className="mb-3 rounded-lg border-2 border-dashed border-[#46178F]/40 p-4 text-center text-sm font-semibold text-[#46178F]">
        Nervous system notes.pdf
      </div>
      <div className="rounded-lg bg-[#1368CE] p-6 text-center text-white">
        <p className="text-xs font-semibold opacity-80">Flashcard</p>
        <p className="mt-1 text-lg font-black">What carries signals between neurons?</p>
      </div>
    </div>
  );
}
