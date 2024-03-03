const musicSvg = SVG("#music");
const codingSvg = SVG("#coding");
const bakingSvg = SVG("#baking");

generate();

function generate() {
  musicSvg.clear();
  codingSvg.clear();

  for (let i = 0; i < 75; i++) {
    const circle = musicSvg.circle(5).cx(100).cy(100).fill("hsl(0, 100%, 100%)").node;

    gsap.to(circle, {
      x: "random(-100, 100, true)",
      y: "random(-100, 100, true)",
      scale: "random(0.25, 1, true)",
      ease: "power3.out(1, 0.5)",
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
    const circle = codingSvg.circle(5).cx(50).cy(100).fill("hsl(0, 100%, 100%)").node;

    /*gsap.to(circle, {
      y: -100,
      scale: "random(0.25, 1, true)",
      duration: 3,
      delay: "random(0, 0.6, true)",
      attr: {
        fill: () => `hsl(53, 50%, ${gsap.utils.random(40, 75)}%)`
      },
      repeat: -1,
      repeatDelay: 0,
      repeatRefresh: true
    });*/
  }
}
