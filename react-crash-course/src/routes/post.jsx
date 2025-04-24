import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Link} from "react-router-dom";


function Post(props) {
    props.author;
    props.body;
    props.id;

    return (
        <Link to={props.id}>
            <Card className="m-3 w-5/12 bg-blue-200">
                <CardHeader>
                    <CardTitle>{props.author}</CardTitle>
                    <CardDescription>{props.body}</CardDescription>
                </CardHeader>
            </Card>
        </Link>
    )
}



export default Post;