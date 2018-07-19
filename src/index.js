import "./index.scss";

console.log(`
Hey dude what's up?
What are you doing here on the browser console?

If you wanna see the code from this website you can use the source maps that I am providing you
But if you wanna see the source code and contribute stuff just check out my repo
https://github.com/SrKomodo/srkomodos-simply-splendid-showcase-site

Actually I wanted to put some cool easter egg here but it's 2AM and I'm too tired to write something interesting so here have some loss

╔════╦════╗
║ |  ║ || ║
╠════╬════╣
║ || ║ |_ ║
╚════╩════╝
`);

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

document.addEventListener("keydown", e => {
  if (e.key === code[konami]) konami++;
  else konami = 0;
  if (konami === code.length) {
    konami = 0;
    document.body.className = "konami";
  }
});
