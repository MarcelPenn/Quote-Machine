let quotes = [
  {
    quote: "quote one",
    author: "author one",
  },
  {
    quote: "quote two",
    author: "author two",
  },
  {
    quote: "quote three",
    author: "author three",
  },
  {
    quote: "quote four",
    author: "author five",
  },
  {
    quote: "quote five",
    author: "author six",
  },
];

const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btn.addEventListener("click", getQuote);

function getQuote() {
  let number = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = "<span>''</span>" + quotes[number].quote + "<span></span>";
  author.innerHTML = "<span>--</span>" + quotes[number].author;
}
