import './App.css'
import PostList from "@/components/postList.jsx";
import MainHeader from "@/components/MainHeader.jsx";
import {useState} from "react";

function App() {

    const [modalIsVisible, setModalIsVisible] = useState(false);

    function showModal() {
        setModalIsVisible(true);
    }

    function hideModal() {
        setModalIsVisible(false);
    }

    return (
        <>
            <MainHeader onCreatePost={showModal}/>
            <PostList onCreatePostClickedShowModal={modalIsVisible} onOutsideModalClicked={hideModal}></PostList>
        </>
    )
}

export default App
