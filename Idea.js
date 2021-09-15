class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  saveToStorage() {
    window.localStorage.setItem(`${this.id}`, JSON.stringify(this));
  }


  deleteFromStorage() {
    window.localStorage.removeItem(`${this.id}`);
  }

  updateIdea() {
    if (this.star) {
      this.star = false;
    } else {
      this.star = true;
    }
  }
}
