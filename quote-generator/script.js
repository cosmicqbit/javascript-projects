const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
// function loading() {
//     loader.hidden = false;
//     quoteContainer.hidden = true;
// }

// Hide Loading
// function complete() {
//     quoteContainer.hidden = false;
//     loader.hidden = true;
// }

// Show New Quote
function newQuote() {
    // loading();
    // Pick a random quote form apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    // Check Quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = quote.text;

    // Check if author field is blank
    if(quote.author === null) {
        authorText.innerText = 'Anonymous';

    }else {
        authorText.innerText = quote.author;
    }

    // Set Quote, Hide Loader
    // complete();
}

// Get Quotes From API

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
        try {
            const response = await fetch(apiUrl);
            apiQuotes = await response.json();
            newQuote();
    } catch (error) {
        // alert(error);
        // Catch Error Here
    } 
}

// Tweet a Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
