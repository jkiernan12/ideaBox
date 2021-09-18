class Idea {
  constructor(title, body, id, star) {
    if (id){
      this.id = id;
    } else {
      this.id = Date.now();
    }

    this.title = title;
    this.body = body;

    if (star){
      this.star = star;
    } else {
      this.star = false;
    }
  }

  saveToStorage() {
    window.localStorage.setItem(`${this.id}`, JSON.stringify(this));
  }


  deleteFromStorage() {
    window.localStorage.removeItem(`${this.id}`);
  }

  updateIdea() {
    if (!this.star) {
      this.star = true;
    } else {
      this.star = false;
    }
    this.saveToStorage();
  }
}
