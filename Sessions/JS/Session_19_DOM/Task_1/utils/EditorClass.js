import User from "./UserClass.js"
import Post from "./PostClass.js"

export default class Editor extends User{
    constructor(email, password) {
        super(email, password);
        if(this.constructor === Editor){
            throw new Error("You can't do that");
        }
    }

    editPostAuthor(author , postID , newContent){
        const post = Post.list.filter(
            post => post.getPostAuthor === author && post.getPostID === postID
        )[0];
        post.setPostContent = newContent;
        return true;
    }
    deletePostAuthor(author , postID){
    // Filter out the post to be deleted
    const initialLength = Post.list.length;
    Post.list = Post.list.filter(
        post => !(post.getPostAuthor === author && post.getPostID === postID)
    );
    return Post.list.length< initialLength;
    }
}