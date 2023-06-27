var jokeBtn = document.getElementById('joke_btn');
var jokeDisplay = document.getElementById('joke');

async function getJoke() {
  try {
    var response = await fetch('https://api.chucknorris.io/jokes/random');
    var data = await response.json();
    jokeDisplay.textContent = data.value;
  } catch (error) {
    console.error('Error:', error);
    jokeDisplay.textContent = 'Failed to fetch joke. Please try again.';
  }
}

jokeBtn.addEventListener('click', getJoke);
