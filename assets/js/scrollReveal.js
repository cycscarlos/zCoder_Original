//: SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  distance: "60px",
  duration: 4800,
  // reset: true,
});

sr.reveal(`.experiences, .contact`, {
  origin: "top",
  interval: 100,
});

sr.reveal(`.profile-details, .skills`, {
  origin: "left",
  interval: 100,
});

// sr.reveal(`.profile-details-sec`, {
//   origin: "right",
//   interval: 0,
// });
