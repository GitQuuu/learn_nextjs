import './App.css'
import PostList from "@/components/postList.jsx";
import {Outlet} from "react-router-dom";

function Posts() {
    return (
        <>
            <Outlet></Outlet>
            <PostList></PostList>
        </>
    )
}

export async function loader(){
    const response = await fetch("http://localhost:8080/posts", {
        method: "GET",
    })
    const responseData = await response.json();
    return responseData.posts;
}

export default Posts
