function toggleMenu() {
  const nav = document.getElementById("mobile-menu");
  const header = document.getElementById("header");

  if (nav.classList.contains("hidden")) {
    nav.classList.remove("hidden");
    header.classList.remove("border-b-4");
    nav.classList.add("border-b-4");
    nav.classList.add("border-[#367460]");

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
    header.classList.add("border-b-4");
    nav.classList.remove("border-b");
    nav.classList.remove("border-[#367460]");

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
