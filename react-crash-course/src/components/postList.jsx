import Post from "@/components/routes/post.jsx";
import NewPost from "@/components/routes/NewPost.jsx";
import {useEffect, useState} from "react";
import {Modal} from "@/components/Modal.jsx";

export default function PostList(){
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        async function fetchPosts(){
            setIsFetching(true);
            const response = await fetch("http://localhost:8080/posts", {
                method: "GET",
            })
            const responseData = await response.json();
            console.log(responseData);
            setPosts(responseData.posts);
            setIsFetching(false);
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

            {isFetching && posts.length === 0 && (
                <p className={'text-2xl text-red-600'}>Loading.....</p>
            )}

            {!isFetching && posts.length === 0 && (
                <p className={'text-2xl text-red-600'}>No posts found.</p>
            )}

            {posts.length > 0 && (
                <div className='flex'>
                    {posts.map((post) =>
                        <Post key={post.body} author={post.author} body={post.body} />)
                    }
                </div>
            )}

        </>
    )
}

