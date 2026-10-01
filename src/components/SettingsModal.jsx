import { useEffect } from "react";
import Button from "./Button";
import { SETTINGS_FIELDS } from "../data";

export default function SettingsModal({ onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 text-[#333]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-black">Update your settings.</h2>
          <button onClick={onClose} className="text-3xl leading-none" aria-label="Close">×</button>
        </div>
        <p className="mb-4 text-sm text-[#555]">Update your language, region and currency.</p>

        {SETTINGS_FIELDS.map((s) => (
          <label key={s.label} className="mb-4 block text-sm font-bold">
            {s.label}
            <select className="mt-1 w-full rounded-lg border border-[#ccc] bg-white px-3 py-2 font-normal">
              {s.options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
        ))}

        <div className="flex justify-end gap-3">
          <Button variant="outline" size="sm" onClick={onClose}>Cancel</Button>
          <Button size="sm" onClick={onClose}>Save Settings</Button>
        </div>
      </div>
    </div>
  );
}
