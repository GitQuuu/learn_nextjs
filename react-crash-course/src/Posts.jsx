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

export default Posts
