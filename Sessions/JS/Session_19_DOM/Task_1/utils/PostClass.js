export default class Post {
  static list = [];
  #id;
  #author;
  #title;
  #content;
  constructor(title, content, author) {
    this.#id = Post.list.length + 1;
    this.#title = title;
    this.#content = content;
    this.#author = author;

    Post.list.push(this);
  }

  get getPostID() {
    return this.#id;
  }
  set setPostContent(newContent) {
    this.#content = newContent;
  }
  get getPostAuthor() {
    return this.#author;
  }
}
