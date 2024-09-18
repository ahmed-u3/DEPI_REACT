import User from "./utils/UserClass.js";
import Post from "./utils/PostClass.js";
import Admin from "./utils/AdminClass.js";
const ali = new User("ali@gmail.com", "al123");
const adham = new User("adham@gmail.com", "ad123");
const u3 = new Admin("yes@gmail.com", "as12223344");





// ali.login("ali@gmail.com", "al123");
// ali.logout();
// ali.viewProfile();
// ali.setCredits = 125;
// ali.setCredits = 25;
// console.log(ali);
ali.addPost("ali post 1", "ali post 1 content");
ali.addPost("ali post 2", "ali post 2 content");
adham.addPost("adham post 1", "adham post 1 content");
adham.addPost("adham post 2", "adham post 2 content");
adham.getUserPosts();
ali.getUserPosts();
console.log(Post.list);


u3.editPostAuthor("ali@gmail.com" , 1 ,"now it's u3's cause I'm the admin");
console.log(Post.list);
u3.deletePostAuthor("ali@gmail.com" , 1)
console.log(Post.list);