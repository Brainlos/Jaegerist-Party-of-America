quotes = [
    'idk',
    'still idk',
    'what do you want from me'
]

quoteTxt = document.getElementById('quoteTxt')

while (true) {
    for (i = 0; i<length(quotes); i++) {
        quoteTxt.innerText = quotes[i]
        setTimeout(500)
    }
}