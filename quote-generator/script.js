const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote() {
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

// On Load
getQuotes();
