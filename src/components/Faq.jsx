import FaqItem from "./FaqItem";
import { FAQS } from "../data";

export default function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="mb-6 text-3xl font-black">Frequently Asked Questions</h2>
      {FAQS.map((f) => (
        <FaqItem key={f.q} q={f.q} a={f.a} />
      ))}
    </section>
  );
}
