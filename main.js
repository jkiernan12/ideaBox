var saveButton = document.querySelector('#saveButton');
var titleInput = document.querySelector('#titleInput');
var bodyInput = document.querySelector('#bodyInput');
var ideaContainer= document.querySelector('#ideaContainer');
window.addEventListener('load', populateIdeas);
saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', checkInputs);
saveButton.addEventListener('mouseout', checkInputs);
ideaContainer.addEventListener('click', deleteCard);

var ideas = [];


function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var currentIdea = new Idea(titleInput.value, bodyInput.value);
     currentIdea.saveToStorage();
     populateIdeas();
     titleInput.value = "";
     bodyInput.value = "";
  }
  // call render function

};

function checkInputs() {
  if (!titleInput.value || !bodyInput.value) {
    saveButton.classList.toggle('form__button__disabled');
  }
};

function populateIdeas() {
  ideas = [];
  for (var i = 0; i < localStorage.length; i++){
      var currentKey = localStorage.key(i);
      var ideaToPush = localStorage.getItem(`${currentKey}`);
      ideaToPush = JSON.parse(ideaToPush);
      ideaToPush = new Idea(ideaToPush.title, ideaToPush.body, ideaToPush.id)
      ideas.push(ideaToPush);
  }
  render();
}

// render function to render to DOM
function render() {
  ideaContainer.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    ideaContainer.innerHTML +=
`   <article class="idea-card" id='${ideas[i].id}'>
      <div class="star-header">
        <img class="star-header__icon" src="assets/star.svg" alt="star icon">
        <img class="star-header__icon" id="deleteBtn" src="assets/delete.svg" alt="delete icon">
      </div>
      <h3 class="idea-card__header">${ideas[i].title}</h3>
      <p class="idea-card__body">${ideas[i].body}</p>
      <div class="comment-container">
        <input class="comment-container__add-comment" type="image" src="assets/comment.svg" width="25px">
        <label>Comment</label>
      </div>
    </article>`
  }
}
function deleteCard(event){
  if (event.target.id === 'deleteBtn'){
    var deleteId = event.target.parentNode.parentNode.id;
    console.log(deleteId);
    for (var i = 0; i < ideas.length; i++) {
      if(ideas[i].id == deleteId){
        ideas[i].deleteFromStorage();
        populateIdeas();
      }
    }
  }
}
