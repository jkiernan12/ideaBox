var saveButton = document.querySelector('#saveButton');
var titleInput = document.querySelector('#titleInput');
var bodyInput = document.querySelector('#bodyInput');

saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', checkInputs);
saveButton.addEventListener('mouseout', checkInputs);

var ideas = [];

function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var currentIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(currentIdea);
  } 
  // call render function
};

function checkInputs() {
  if (!titleInput.value || !bodyInput.value) {
    saveButton.classList.toggle('form__button__disabled');
  }
};


// render function to render to DOM
