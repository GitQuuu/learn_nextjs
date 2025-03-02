import Post from "@/components/post.jsx";
import NewPost from "@/components/NewPost.jsx";
import {useState} from "react";
import {Modal} from "@/components/Modal.jsx";

export default function PostList(){
    const [enteredBody, setEnteredBody] = useState([]);
    const [enteredAuthor, setEnteredAuthor] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function toggleModal() {
        setModalIsVisible(false);
    }

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            {modalIsVisible && (
                <Modal isVisible={modalIsVisible} onOutsideModalClick={toggleModal} >
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}></NewPost>
                </Modal>
                )
            }

            <div className='flex'>
                <Post author={enteredAuthor} body={enteredBody}></Post>
                <Post author="Qu" body="Still fan of Angular"></Post>
                <Post author="Qu" body="Maybe Svelte 5"></Post>
            </div>
        </>
    )
}

