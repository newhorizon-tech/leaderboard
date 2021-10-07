const display = () => {
  const listElement = document.querySelector('#list');

  for (let i = 1; i <= 10; i += 1) {
    const scoreElement = document.createElement('li');
    scoreElement.textContent = `John: ${i * 10}`;
    listElement.appendChild(scoreElement);
  }
};

export default display;
