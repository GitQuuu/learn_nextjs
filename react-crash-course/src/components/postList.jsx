import Post from "@/components/post.jsx";
import NewPost from "@/components/NewPost.jsx";
import {useEffect, useState} from "react";
import {Modal} from "@/components/Modal.jsx";

export default function PostList({onCreatePostClickedShowModal, onOutsideModalClicked}){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch("http://localhost:8080/posts", {
                method: "GET",
            })
            const responseData = await response.json();
            console.log(responseData);
            setPosts(responseData.posts);
        }

        fetchPosts().then();
    }, []);

    function addPostHandler(postData){
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        }).then(response => response.json()
            .then(json => {
                setPosts(json.Posts)
            })
        );
        setPosts( (existingPost) => [postData, ...existingPost] );
        console.log(postData);
    }


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

            {posts.length > 0 ? (
                <div className='flex'>
                    {posts.map((post) =>
                        <Post key={post.body} author={post.author} body={post.body} />)
                    }
                </div>
            ) : <p className={'text-2xl text-red-600'}>No posts found.</p>}
        </>
    )
}

