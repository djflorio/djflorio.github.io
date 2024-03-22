const musicSvg = SVG("#music");
const codingSvg = SVG("#coding");
const bakingSvg = SVG("#baking");

generate();

function generate() {
  musicSvg.clear();
  codingSvg.clear();

  for (let i = 0; i < 75; i++) {
    const circle = musicSvg.circle(5).cx(100).cy(100).fill("hsl(103, 50%, 50%)").node;

    gsap.to(circle, {
      x: "random(-100, 100, true)",
      y: "random(-100, 100, true)",
      scale: "random(0.25, 1, true)",
      ease: "power2.out",
      duration: 3,
      delay: "random(0, 0.6, true)",
      attr: {
        fill: () => `hsl(103, 50%, ${gsap.utils.random(40, 75)}%)`
      },
      repeat: -1,
      repeatDelay: 0,
      repeatRefresh: true
    });
  }

  for (let i = 0; i < 75; i++) {
    const x = getRandomValueBetween(0, 200);
    const circle = codingSvg.circle(5).cx(x).cy(0).fill("hsl(229, 50%, 50%)").node;

    gsap.fromTo(
      circle,
      {
        y: 0,
      },
      {
        //x: "random(-100, 100, true)",
        y: 200,
        scale: "random(0.25, 1, true)",
        ease: "power3.in",
        duration: getRandomValueBetween(1, 3),
        //delay: "random(0, 0.6, true)",
        attr: {
          fill: () => `hsl(229 50%, ${gsap.utils.random(40, 75)}%)`
        },
        repeat: -1,
        repeatDelay: 0,
        repeatRefresh: true
      }
    );
  }

  for (let i = 0; i < 75; i++) {
    const x = getRandomValueBetween(0, 200);
    const circle = bakingSvg.circle(5).cx(x).cy(0).fill("hsl(10, 50%, 50%)").node;

    gsap.fromTo(
      circle,
      {
        y: 200,
      },
      {
        //x: "random(-100, 100, true)",
        y: 0,
        scale: "random(0.25, 1, true)",
        ease: "power3.in",
        duration: getRandomValueBetween(1, 3),
        //delay: "random(0, 0.6, true)",
        attr: {
          fill: () => `hsl(10, 50%, ${gsap.utils.random(40, 75)}%)`
        },
        repeat: -1,
        repeatDelay: 0,
        repeatRefresh: true
      }
    );
  }
}

function getRandomValueBetween(start, end) {
  const r = Math.random();
  return start + r * (end - start);
}
