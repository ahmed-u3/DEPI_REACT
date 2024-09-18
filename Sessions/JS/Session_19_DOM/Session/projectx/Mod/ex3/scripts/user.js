const user = {
  username: "ahmed",
  bdate: 1990,
  sayHi: function () {
    console.log("hiiiiiiiiiii, ", this.username);
  },
  age: function () {
    console.log(2024 - this.bdate);
  },
};

export default user;

export const isOnline = false;
