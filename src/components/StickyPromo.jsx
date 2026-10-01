export default function StickyPromo() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex flex-wrap items-center justify-center gap-3 bg-[#46178F] px-4 py-3 text-sm text-white">
      <span>
        Host awesome get-togethers with Kahoot!+.{" "}
        <strong>Get Kahoot!+ from $3/mo. Save 20%. Offer ends October 1.</strong>
      </span>
      <a
        href="https://kahoot.com/personal-campaign/"
        className="rounded-md bg-white px-4 py-1.5 font-bold text-[#46178F] hover:bg-[#F2F2F2]"
      >
        Buy now
      </a>
    </div>
  );
}
