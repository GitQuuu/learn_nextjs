import { useLoaderData, Link } from 'react-router-dom';


function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <div>
                <main>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." >
                            Okay
                        </Link>
                    </p>
                </main>
            </div>

        );
    }
    return (

            <main >
                <p >{post.author}</p>
                <p>{post.body}</p>
            </main>

    );
}

export default PostDetails;

export async function loader({params}){
   const response = await fetch("http://localhost:8080/posts/" + params.id)
   const resData = await response.json();

   return resData.post;
}