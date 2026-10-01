import { STORES } from "../data";

export default function TopBanner() {
  return (
    <div className="bg-[#F2F2F2] px-4 py-2 text-center text-sm font-semibold">
      Get the mobile app for the best Kahoot! experience!{" "}
      <a href={STORES.app.ios} className="font-bold text-[#46178F] underline">
        Open
      </a>
    </div>
  );
}
