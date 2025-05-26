document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const logo = document.getElementById("logo");
  
  gsap.from(".letter", {
    opacity: 0,
    duration: 1,
    stagger: 0.03,
    ease: "power1.out",
    filter: "blur(1px)",
    scrollTrigger: {
      trigger: "#buy-ticket",
      start: "top 80%",
    },
  });

  gsap.from("#form", {
    opacity: 0,
    duration: 1,
    y: 50,
    ease: "power1.out",
    filter: "blur(1px)",
    scrollTrigger: {
      trigger: "#form",
      start: "top 80%",
    },
  });

  gsap.fromTo(
    logo,
    {
      opacity: 0,
      y: 400,
      filter: "blur(1px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0)",
      duration: 1.2,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    },
  );

  gsap.from("#about h2", {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: "#why-are-we-better",
      start: "top 80%",
    },
  });

  gsap.from("#about p", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  gsap.from("#why-are-we-better h2", {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#why-are-we-better",
      start: "top 80%",
    },
  });

  gsap.from("#why-are-we-better p", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: "#why-are-we-better",
      start: "top 80%",
    },
  });

  gsap.from("#questions h2", {
    opacity: 0,
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#questions",
      start: "top 80%",
    },
  });

  gsap.from(".left-box", {
    x: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".left-box",
      start: "top 80%",
    },
  });

  gsap.from(".right-box", {
    x: 100,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".right-box",
      start: "top 80%",
    },
  });

  gsap.from(".footer__group a", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".footer__group",
      start: "top 80%",
    },
  });

  gsap.from(".footer__text_group p", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".footer__group",
      start: "top 80%",
    },
  });
});
