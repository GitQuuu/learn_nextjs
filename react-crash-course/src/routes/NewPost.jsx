import classes from './NewPost.module.css';
import {Modal} from "@/components/Modal.jsx";
import {Link} from "react-router-dom";

function NewPost() {

    return (
        <Modal>
        <form className={classes.form} >
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name="body" required rows={3} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="author" required/>
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
export function action(){
    fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    });
}