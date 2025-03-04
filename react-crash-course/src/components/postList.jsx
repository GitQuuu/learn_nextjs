import Post from "@/components/post.jsx";
import NewPost from "@/components/NewPost.jsx";
import {useState} from "react";
import {Modal} from "@/components/Modal.jsx";

export default function PostList({onCreatePostClickedShowModal, onOutsideModalClicked}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){
        setPosts( (existingPost) => [postData, ...postData] );
    };

2
    return (
        <>
            {onCreatePostClickedShowModal && (
                <Modal onOutsideModalClick={onOutsideModalClicked} >
                    <NewPost
                        onCancel={onOutsideModalClicked} onAddPost={addPostHandler}>
                    </NewPost>
                </Modal>
                )
            }

            <div className='flex'>
                <Post author="Qu" body="Still fan of Angular"></Post>,
            </div>
        </>
    )
}

