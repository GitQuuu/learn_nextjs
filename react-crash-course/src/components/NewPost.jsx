import classes from './NewPost.module.css';

function NewPost({onBodyChange, onAuthorChange, onCancel}) {
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
        console.log(postData);
    }
    return (
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
                <button
                    type={"button"}
                    onClick={onCancel}
                >Cancel
                </button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;