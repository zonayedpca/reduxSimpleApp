// Redux
const { createStore } = Redux;

// Get All the Elements
const score = document.getElementById('score');
const btn = document.querySelector('.btn');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

const counter = (state = 0, { type }) => {
  switch (type) {
    case 'INCREMENT':
      return ++state;
      break;
    case 'DECREMENT':
      if(state > 0)
        return --state;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

const store = createStore(counter);

store.subscribe(() => score.textContent = store.getState())

btn.addEventListener('click', (e) => {
  if(e.target.id === 'increment') store.dispatch({ type: 'INCREMENT' });
  if(e.target.id === 'decrement') store.dispatch({ type: 'DECREMENT' });
  if(e.target.id === 'reset') store.dispatch({ type: 'RESET' });
});
