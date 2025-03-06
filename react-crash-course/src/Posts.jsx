import './App.css'
import PostList from "@/components/postList.jsx";
import MainHeader from "@/components/MainHeader.jsx";
import {useState} from "react";

function Posts() {

    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModal() {
        setModalIsVisible(true);
    }

    function hideModal() {
        setModalIsVisible(false);
    }

    return (
        <>
            <PostList onCreatePostClickedShowModal={modalIsVisible} onOutsideModalClicked={hideModal}></PostList>
        </>
    )
}

export default Posts
