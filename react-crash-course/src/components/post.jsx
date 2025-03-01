import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.js";

function Post(props) {
    props.author;
    props.body;
    
    return (
    <Card className="m-3 bg-blue-200">
        <CardHeader>
            <CardTitle>{props.author}</CardTitle>
            <CardDescription>{props.body}</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
    )
}

export default Post;