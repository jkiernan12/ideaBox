var bodyInput = document.querySelector('#bodyInput');
var ideaContainer = document.querySelector('#ideaContainer');
var saveButton = document.querySelector('#saveButton');
var searchInput = document.querySelector('#searchInput');
var starredIdeasButton = document.querySelector('#starSectionButton');
var titleInput = document.querySelector('#titleInput');

window.addEventListener('load', populateIdeas);
ideaContainer.addEventListener('click', ideaCardHandler);
saveButton.addEventListener('click', saveIdea);
saveButton.addEventListener('mouseover', checkInputs);
saveButton.addEventListener('mouseout', checkInputs);
searchInput.addEventListener('keyup', searchIdeas);
starredIdeasButton.addEventListener('click', showStarredIdeas);

var ideas = [];

function checkInputs() {
  if (!titleInput.value || !bodyInput.value) {
    saveButton.classList.toggle('form__button__disabled');
  }
};

function deleteCard(event) {
  var deleteId = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id == deleteId) {
      ideas[i].deleteFromStorage();
      populateIdeas();
    }
  }
};

function ideaCardHandler(event) {
  if (event.target.id === 'deleteBtn') {
    deleteCard(event);
  } else if (event.target.id === 'starButton') {
    toggleStar(event);
  }
};

function populateIdeas() {
  ideas = [];
  for (var i = 0; i < localStorage.length; i++) {
    var currentKey = localStorage.key(i);
    var ideaToPush = localStorage.getItem(`${currentKey}`);
    ideaToPush = JSON.parse(ideaToPush);
    ideaToPush = new Idea(ideaToPush.title, ideaToPush.body, ideaToPush.id, ideaToPush.star);
    ideas.push(ideaToPush);
  }
  render();
};

function render() {
  ideaContainer.innerHTML = "";
  for (var i = 0; i < ideas.length; i++) {
    var starImage = "";
    if (ideas[i].star === true) {
      starImage = "assets/star-active.svg";
    } else {
      starImage = "assets/star.svg";
    }
    ideaContainer.innerHTML +=
      `   <article class="idea-card" id="${ideas[i].id}">
      <div class="star-header">
        <img class="star-header__icon" id="starButton" src="${starImage}" alt="star icon">
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
};

function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var currentIdea = new Idea(titleInput.value, bodyInput.value);
    currentIdea.saveToStorage();
    populateIdeas();
    titleInput.value = "";
    bodyInput.value = "";
  }
};

function searchIdeas(event) {
  event.preventDefault();
  var currentInput = searchInput.value;
  for (var i = 0; i < ideas.length; i++) {
    var currentHTMLElement = document.getElementById(`${ideas[i].id}`);
    if (!ideas[i].body.includes(currentInput) && !ideas[i].title.includes(currentInput)) {
      currentHTMLElement.classList.add("hidden");
    } else {
      currentHTMLElement.classList.remove("hidden");
    }
  }
};

function showStarredIdeas(event) {
  event.preventDefault();
  if (starredIdeasButton.innerText === "Show Starred Ideas") {
    starredIdeasButton.innerText = "Show All Ideas";
    for (var i = 0; i < ideas.length; i++) {
      var currentHTMLElement = document.getElementById(`${ideas[i].id}`);
      if (!ideas[i].star) {
        currentHTMLElement.classList.add("hidden");
      }
    }
  } else {
    starredIdeasButton.innerText = "Show Starred Ideas"
    for (var i = 0; i < ideas.length; i++) {
      var currentHTMLElement = document.getElementById(`${ideas[i].id}`);
      if (!ideas[i].star) {
        currentHTMLElement.classList.remove("hidden");
      }
    }
  }
};

function toggleStar(event) {
  var starId = event.target.parentNode.parentNode.id;
  for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id == starId) {
      ideas[i].updateIdea();
      populateIdeas();
    }
  }
};
