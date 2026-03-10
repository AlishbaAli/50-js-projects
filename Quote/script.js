let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
const quotes = [
  {
    quote: `"Act as if what you do makes a difference. It does"`,
    person: `William James`,
  },
  {
    quote: `"Don’t watch the clock; do what it does. Keep going"`,
    person: ` Sam Levenson`,
  },
  {
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston S. Churchill`,
  },
];
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
