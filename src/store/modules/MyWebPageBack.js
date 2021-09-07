import { gsap } from "gsap";
export default {
  state: {
    up: "Вверх",
    pageBackImg: [
      {
        src: "01.png",
        alt: "01.png",
        speed: "-5",
      },
      {
        src: "02.png",
        alt: "02.png",
        speed: "5",
      },
      {
        src: "03.png",
        alt: "03.png",
        speed: "-2",
      },
      {
        src: "04.png",
        alt: "04.png",
        speed: "4",
      },
      {
        src: "05.png",
        alt: "05.png",
        speed: "6",
      },
    ],
  },
  getters: {
    up(state) {
      if (window.screen.width >= 720) {
        return state.up = "Вверх";
      } else {
        return state.up = "&#8657;"
      }
    },
    pageBackImg(state) {
      return state.pageBackImg;
    },
  },
  mutations: {},
  actions: {
    createBg(state) {
      if (window.screen.width >= 1024) {
        var n = 105,
          speed = 0.1;
        var c = document.getElementById("snow"),
          ctx = c.getContext("2d"),
          cw = (c.width = window.innerWidth),
          ch = (c.height = window.innerHeight),
          bg = new Image(),
          img = new Image(100, 100),
          img2 = new Image(100, 100),
          mouseProps = { x: cw / 2, y: cw / 2 },
          particles = [],
          Particle = function(index) {
            this.index = index;
            this.img = [img, img2][index % 2];
            this.x = this.y = this.progress = this.opacity = this.scale = 1;
            this.size = 25 + 400 * ((index + 1) / n);
            if (index > n * 0.96) this.size *= 4;

            this.dur = (2 - 1 * ((index + 1) / n)) / speed;

            var rot = -rand(3, 5);
            if (index % 3 == 0) rot = -rot;

            this.draw = function() {
              var offsetX = -(mouseProps.x - cw / 2) * (this.size / 1000),
                offsetY = -(mouseProps.y - ch / 2) * (this.size / 1000),
                size = this.size * this.scale;
              ctx.translate(this.x + offsetX, this.y + offsetY);
              ctx.rotate(rot * this.progress);
              ctx.globalAlpha = this.opacity;
              ctx.drawImage(this.img, -size / 2, -size / 2, size, size);
              ctx.rotate(-rot * this.progress);
              ctx.translate(-this.x - offsetX, -this.y - offsetY);
            };
          };

        function setParticle(p, replay) {
          var _tl = gsap
            .timeline()
            .fromTo(
              p,
              {
                x: rand(-p.size / 2, cw + p.size),
                y: rand(-p.size / 2, ch + p.size),
                progress: 0,
                scale: function(i) {
                  return p.index % 2 == 0 ? 0.8 : rand(2.5, 5);
                },
              },
              {
                duration: p.dur,
                x: "+=" + String(rand(-100, 100)),
                y: "+=" + String(rand(-50, 50)),
                scale: function(i) {
                  return p.index % 2 == 0 ? rand(2.5, 5) : 0.8;
                },
                progress: 1,
                ease: "power4.in",
                onComplete: function() {
                  setParticle(p, true);
                },
              },
              0
            )
            .fromTo(
              p,
              {
                opacity: 0,
              },
              {
                duration: p.dur / 4,
                opacity: 1,
                yoyo: true,
                repeat: 3,
                ease: "power4.in",
              },
              0
            );
          if (!replay) _tl.seek(p.dur * rand());
        }

        for (var i = 0; i < n; i++) {
          particles.push(new Particle(i));
          setParticle(particles[i]);
        }

        gsap.ticker.add(function() {
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = "source-over";
          ctx.drawImage(bg, 0, 0, cw, ch);
          ctx.globalCompositeOperation = "lighter";
          for (var i = 0; i < n; i++) particles[i].draw();
        });

        window.addEventListener("mousemove", function(e) {
          gsap.to(mouseProps, {
            duration: 3,
            x: e.clientX,
            y: e.clientY,
            overwrite: true,
          });
        });

        function rand(min = 0, max = 1) {
          return min + (max - min) * Math.random();
        }

        bg.src =
          "https://firebasestorage.googleapis.com/v0/b/myportfolio-92ca1.appspot.com/o/snow-bg.jpg?alt=media&token=2bfb19e2-88fb-4b03-8b35-9dc50127aeb7";
        img.src =
          "https://firebasestorage.googleapis.com/v0/b/myportfolio-92ca1.appspot.com/o/snow.png?alt=media&token=00a075fd-6b37-44b8-a31c-c1e2fcdd06a7";
        img2.src =
          "https://firebasestorage.googleapis.com/v0/b/myportfolio-92ca1.appspot.com/o/snow.png?alt=media&token=00a075fd-6b37-44b8-a31c-c1e2fcdd06a7";
      }
    },
  },
};
