/**
 * @class - main users class
 */
export default class Main {
  /**
   * @static - users list
   */
  static list = [];

  #id;
  #email;
  #password;
  #isOnline;
  constructor(email, password) {
    if (this.constructor === Main) {
      throw new Error("main can't create user");
    }

    this.#id = Main.list.length + 1;
    this.#email = email;
    this.#password = password;
    this.#isOnline = false;
    Main.list.push(this);
  }

  get getEmail() {
    return this.#email;
  }

  login(email, password) {
    if (this.#email !== email || this.#password !== password)
      return console.error("invalid username or password");

    console.log("Welcome, ", this.#email.split("@")[0]);
    this.#isOnline = true;
  }
  logout() {
    this.#isOnline = false;
  }
  viewProfile() {
    if (!this.#isOnline) return console.error("plz login");
    console.log(this.#email.split("@")[0], "'s profile page");
  }
}
