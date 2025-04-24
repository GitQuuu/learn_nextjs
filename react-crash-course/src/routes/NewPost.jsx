import classes from './NewPost.module.css';
import {useState} from "react";
import {Modal} from "@/components/Modal.jsx";
import {Link} from "react-router-dom";

function NewPost() {
    const [enteredBody, setEnteredBody] = useState([]);
    const [enteredAuthor, setEnteredAuthor] = useState([]);

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); // prevent http request on form submit
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        }

            fetch("http://localhost:8080/posts", {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            });
    }
    
    return (
        <Modal>
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler}/>
            </p>
            <p className={classes.actions + " mt-2"}>
                <Link
                    className={'bg-gray-200 rounded w-3/12 flex items-center justify-center'}
                    type={"button"}
                    to=".."
                >Cancel
                </Link>
                <button type={"submit"}>Submit</button>
            </p>
        </form>
        </Modal>
    );
}

export default NewPost;