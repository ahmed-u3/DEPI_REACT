import Main from "./MainClass.js";
import Post from "./PostClass.js";
export default class User extends Main {
  #credits;
  constructor(email, password) {
    super(email, password);
    this.#credits = 0;
  }

  set setCredits(amount) {
    if (Number(amount) && Number(amount) > 0) {
      this.#credits += amount;
    } else {
      return console.error("plz enter valid amount");
    }
  }

  addPost(title, content) {
    new Post(title, content, this.getEmail);
    return true;
  }

  getUserPosts() {
    const posts = Post.list.filter(
      post => post.getPostAuthor === this.getEmail
    );
    console.log(posts);
  }
}
