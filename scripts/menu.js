function toggleMenu() {
  const nav = document.getElementById("mobile-menu");

  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    gsap.fromTo(
      nav,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
    );
  } else {
    gsap.to(nav, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        nav.classList.add("hidden");
      },
    });
  }
}
