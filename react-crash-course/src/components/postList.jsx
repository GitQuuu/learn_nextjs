import Post from "@/components/post.jsx";
import NewPost from "@/components/NewPost.jsx";
import {useState} from "react";

export default function PostList(){
    const [enteredBody, setEnteredBody] = useState([]);
    const [enteredAuthor, setEnteredAuthor] = useState([]);

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}></NewPost>
            </Modal>
            <div className='flex'>
                <Post author={enteredAuthor} body={enteredBody}></Post>
                <Post author="Qu" body="Still fan of Angular"></Post>
                <Post author="Qu" body="Maybe Svelte 5"></Post>
            </div>
        </>
    )
}

