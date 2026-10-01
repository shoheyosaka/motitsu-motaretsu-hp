// C案：スクロールに合わせて要素をふわっと表示する
// 画面外に出ると非表示に戻り、上にスクロールしたときは上から現れる
const revealTargets = document.querySelectorAll(
  [
    ".c-hero-copy > *",
    ".c-promises > div",
    ".c-section-title",
    ".c-about-quote",
    ".c-about-body",
    ".c-team-lead",
    ".c-team-points article",
    ".c-service-intro",
    ".c-service-list article",
    ".c-work-grid article",
    ".c-contact-message",
    ".c-form",
    ".c-footer-message",
    ".c-footer dl",
  ].join(", "),
);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  revealTargets.forEach((target, index) => {
    target.classList.add("c-reveal-item", `c-reveal-delay-${index % 3}`);

    if (target.matches(".c-section-title, .c-about-quote, .c-service-intro, .c-contact-message")) {
      target.classList.add("c-reveal-left");
    } else if (target.matches(".c-form, .c-about-body")) {
      target.classList.add("c-reveal-right");
    }
  });

  let previousScrollY = window.scrollY;

  const observer = new IntersectionObserver(
    (entries) => {
      const isScrollingDown = window.scrollY >= previousScrollY;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle("c-reveal-from-top", !isScrollingDown);
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });

      previousScrollY = window.scrollY;
    },
    { threshold: 0.14, rootMargin: "0px 0px -6% 0px" },
  );

  revealTargets.forEach((target) => observer.observe(target));
}
