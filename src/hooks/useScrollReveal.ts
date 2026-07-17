import { useEffect } from "react";

/**
 * Reveals elements marked with `data-reveal` as they scroll into view by
 * toggling the `is-visible` class. Runs once after hydration and observes the
 * whole document, so sections just need the `reveal` class + `data-reveal`
 * attribute — no wrapper components or refs to thread through.
 *
 * Degrades gracefully: if IntersectionObserver is unavailable, every element is
 * revealed immediately so nothing stays hidden.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (elements.length === 0) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
