import './App.css'
import Post from "./components/post.jsx";

function App() {
  return (
    <main>
      <Post author="Qu" body="React.js is okay"></Post>
      <Post author="Qu" body="Still fan of Angular"></Post>
      <Post author="Qu" body="Maybe Svelte 5"></Post>
    </main>
  )
}

export default App
