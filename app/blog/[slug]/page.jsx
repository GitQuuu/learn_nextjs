export default function BlogPostPage({params}) {
    console.log(params)
    return (
        <main>
            <h1>Blog Post</h1>
            <h4>{params.slug}</h4>
        </main>
    )
}