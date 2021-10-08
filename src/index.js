import './style.scss';
import display from './display';

import { postData } from './api-interface';

const newScoreBtn = document.querySelector('#new-score');
const scoreInput = document.querySelector('#score');
const nameInput = document.querySelector('#name');
const refreshBtn = document.querySelector('#refresh');

const clearInput = () => {
  nameInput.value = '';
  scoreInput.value = '';
};

newScoreBtn.addEventListener('click', () => {
  const newScore = scoreInput.value;
  const newName = nameInput.value;

  const scoreObj = {
    user: newName,
    score: newScore,
  };
  postData(scoreObj);
  clearInput();
});

refreshBtn.addEventListener('click', display);

document.addEventListener('DOMContentLoaded', display);
