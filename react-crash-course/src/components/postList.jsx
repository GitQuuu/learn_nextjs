import Post from "@/routes/post.jsx";
import {useLoaderData} from "react-router-dom";

export default function PostList(){
    const posts = useLoaderData();


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
            {posts.length === 0 && (
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

