'use strict';

// select all the buttons

const btns = document.querySelectorAll('.question-btn');

// click on the "plus" button => toggle(add/remove) class .show-text

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const questions = e.currentTarget.parentElement.parentElement;

    questions.classList.toggle('show-text');
  });
});
