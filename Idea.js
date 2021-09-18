class Idea {
  constructor(title, body, id) {
    if (id){
      this.id = id;
    } else {
      this.id = Date.now();
    }

    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
    window.localStorage.setItem(`${this.id}`, JSON.stringify(this));
  }


  deleteFromStorage() {
    window.localStorage.removeItem(`${this.id}`);
    window.localStorage.removeItem(``)
  }

  updateIdea() {
    if (this.star) {
      this.star = false;
    } else {
      this.star = true;
    }
  }
}
