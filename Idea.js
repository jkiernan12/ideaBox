class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
//^ save the instance to storage
  }


  deleteFromStorage() {

  }

  updateIdea() {
    //^update idea
  }
}
