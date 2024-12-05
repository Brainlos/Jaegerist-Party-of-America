const quotes = [
    'idk',
    'still idk',
    'what do you want from me'
];

const quoteTxt = document.getElementById('quoteTxt');
let i = 0;

// Function to update the quote
function updateQuote() {
    quoteTxt.innerText = quotes[i];
    i = (i + 1) % quotes.length; // Loop back to the start
}

// Change the quote every 500ms
setInterval(updateQuote, 500);
