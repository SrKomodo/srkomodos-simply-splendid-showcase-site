import "./index.scss";

const code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let konami = 0;

document.addEventListener("keypress", e => {
  if (e.key === code[konami]) konami++;
  else konami = 0;
  if (konami === code.length) {
    konami = 0;
    document.body.className = "konami";
  }
});
