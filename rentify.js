document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const primaryNav = document.querySelector("nav");
  if (mobileNavToggle && primaryNav) {
    mobileNavToggle.addEventListener("click", () => {
      const isVisible = primaryNav.getAttribute("data-visible");
      const show = isVisible !== "true";
      primaryNav.setAttribute("data-visible", show ? "true" : "false");
      mobileNavToggle.setAttribute("aria-expanded", show ? "true" : "false");
    });

    // Close menu on link click (mobile)
    primaryNav.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        primaryNav.setAttribute("data-visible", "false");
        mobileNavToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        primaryNav.setAttribute("data-visible", "false");
        mobileNavToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Scroll Animations
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    animatedElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback
    animatedElements.forEach((el) => el.classList.add("visible"));
  }
});
