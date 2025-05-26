function toggleMenu() {
  const nav = document.getElementById("mobile-menu");
  nav.classList.toggle("hidden");

  gsap.fromTo(
    nav,
    { y: -20, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
  );
}
