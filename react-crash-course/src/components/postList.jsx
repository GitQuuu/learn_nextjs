import Post from "@/routes/post.jsx";
import {useLoaderData} from "react-router-dom";

export default function PostList(){
    const posts = useLoaderData();

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

