particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

let typing = new Typed(".animate", {
  strings: ["Programmer", "Designer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});
