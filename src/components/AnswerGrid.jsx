const ANSWERS = [
  { color: "bg-[#E21B3C]", shape: "▲" },
  { color: "bg-[#1368CE]", shape: "◆" },
  { color: "bg-[#D89E00]", shape: "●" },
  { color: "bg-[#26890C]", shape: "■" },
];

// The four red / blue / yellow / green Kahoot answer tiles.
export default function AnswerGrid({ labels }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {ANSWERS.map((a, i) => (
        <div
          key={a.shape}
          className={`flex items-center gap-3 rounded-lg px-4 py-5 text-white shadow-[0_4px_0_rgba(0,0,0,0.25)] ${a.color}`}
        >
          <span className="text-xl">{a.shape}</span>
          <span className="text-sm font-bold">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}
