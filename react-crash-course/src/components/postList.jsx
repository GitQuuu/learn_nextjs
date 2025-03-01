import Post from "@/components/post.jsx";

export default function PostList(){
    return (
        <div className='flex'>
            <Post author="Qu" body="React.js is okay"></Post>
            <Post author="Qu" body="Still fan of Angular"></Post>
            <Post author="Qu" body="Maybe Svelte 5"></Post>
        </div>
    )
}

