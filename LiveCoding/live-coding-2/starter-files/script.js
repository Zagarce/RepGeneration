// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

// Funcion fetch de la api
async function fetchAnswer() {
  try {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    return data.answer;
  } catch (error) {
    console.error('Error fetching answer:', error);
    return null;
  }
}

// Funcion handleKey
function handleKeyEnter(event) {
  if (event.key === 'Enter') {
    getAndDisplayAnswer();
  }
}

// Funcion para hacer aparecer la respuesta
async function getAndDisplayAnswer() {
  const inputElement = document.getElementById('input');
  const answerElement = document.getElementById('answer');
  const errorElement = document.getElementById('error');

  const question = inputElement.value.trim();

  if (question === '') {
    errorElement.textContent = 'Please enter a question.';
    return;
  }

  errorElement.textContent = '';

  const answer = await fetchAnswer();

  if (answer !== null) {
    answerElement.textContent = answer;
    setTimeout(() => {
      answerElement.textContent = '';
    }, 3000);
  }
}

// EventListener par el boton
const buttonElement = document.getElementById('button');
buttonElement.addEventListener('click', getAndDisplayAnswer);