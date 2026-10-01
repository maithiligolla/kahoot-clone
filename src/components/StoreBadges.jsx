import { BADGE_BASE } from "../data";

export default function StoreBadges({ links, center = true }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center md:justify-start" : ""}`}>
      <a href={links.ios}>
        <img src={`${BADGE_BASE}app-store-badge.svg`} alt="Download on the App Store" className="h-12" />
      </a>
      <a href={links.android}>
        <img src={`${BADGE_BASE}google-play-badge.svg`} alt="Get it on Google Play" className="h-12" />
      </a>
      <a href={links.chrome}>
        <img src={`${BADGE_BASE}chrome-badge.svg`} alt="Download on the Chrome Store" className="h-12" />
      </a>
    </div>
  );
}
