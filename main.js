var saveButton = document.querySelector('#saveButton');
var titleInput = document.querySelector('#titleInput');
var bodyInput = document.querySelector('#bodyInput');

saveButton.addEventListener('click', saveIdea);

var ideas = [];

function saveIdea() {
  // if titleInput & bodyInput have contents, create new Idea instance.
  if (titleInput.value && bodyInput.value) {
    var currentIdea = new Idea(titleInput.value, bodyInput.value);
    ideas.push(currentIdea);
  } else {
    
  }
  // add class instance to ideas array.
  // call render function
};

// render function to render to DOM
