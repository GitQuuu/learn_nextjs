import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Post from "@/Posts.jsx";
import NewPost from "@/components/routes/NewPost.jsx";
import RootLayout from "@/components/routes/RootLayout.jsx";

const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children:
            [
                {path: '/', element: <Post/>, children:[
                        {path: '/create-post', element: <NewPost/>}
                    ]},

            ]
    },

])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
