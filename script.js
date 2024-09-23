function searchGoogle() {
    const query = document.getElementById('searchBar').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

// Add event listener for the search button
document.getElementById('searchButton').addEventListener('click', searchGoogle);

// Add event listener for pressing the Enter key
document.getElementById('searchBar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchGoogle();
    }
});

// Fetch a dad joke
fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        document.getElementById('jokeElement').innerHTML = "Oops! Couldn't load a joke.";
    });
