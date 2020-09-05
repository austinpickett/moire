import * as p5 from 'p5'

let s = (sk) => {
  sk.setup = () => {
    let gfx = sk.createGraphics(window.innerWidth, window.innerHeight);
    let gfx2 = sk.createGraphics(window.innerWidth, window.innerHeight);

    sk.createCanvas(window.innerWidth, window.innerHeight);
    sk.angleMode(sk.DEGREES);
    sk.imageMode(sk.CENTER);
    sk.translate(window.innerWidth / 2, window.innerHeight / 2);
    sk.background('white');

    gfx.stroke(200);
    gfx.strokeWeight(3);
    gfx.noFill()
    for (let i = 0; i < 1000; i += 10) {
      gfx.stroke('red')
      gfx.strokeWeight(2)
      gfx.ellipse(window.innerWidth / 2, window.innerHeight / 2, i - 500, i - 500)
    }

    gfx2.stroke(200);
    gfx2.strokeWeight(3);
    gfx2.noFill()
    for (let i = 0; i < 1000; i += 10) {
      gfx2.stroke('blue')
      gfx2.strokeWeight(2)
      gfx2.ellipse(window.innerWidth / 2, window.innerHeight / 2, i - 500, i - 500)
    }

    sk.image(gfx, 0, 0);
    sk.image(gfx2, 100, 0);
  }
}

const P5 = new p5(s)
