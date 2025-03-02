import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.js";

function Post(props) {
    props.author;
    props.body;

    return (
    <Card className="m-3 w-5/12 bg-blue-200">
        <CardHeader>
            <CardTitle>{props.author}</CardTitle>
            <CardDescription>{props.body}</CardDescription>
        </CardHeader>
    </Card>
    )
}

export default Post;