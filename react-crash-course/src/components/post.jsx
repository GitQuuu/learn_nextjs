function Post(props) {
    props.author;
    props.body;
    return (
        <div>
            <p className={'text-red-500'}>{props.author}</p>
            <p>{props.body}</p>
        </div>
    )
}

export default Post;