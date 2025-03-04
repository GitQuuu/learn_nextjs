import Post from "@/components/post.jsx";
import NewPost from "@/components/NewPost.jsx";
import {useState} from "react";
import {Modal} from "@/components/Modal.jsx";

export default function PostList({onCreatePostClickedShowModal, onOutsideModalClicked}){
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData){


        setPosts( (existingPost) => [postData, ...existingPost] );
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
                {posts.map((post) =>
                    <Post key={post.body} author={post.author} body={post.body} />)
                }
            </div>
        </>
    )
}

