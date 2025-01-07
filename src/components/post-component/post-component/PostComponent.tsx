import {IPost} from "../../../models/i-posts-model/IPostsModel.ts";
import './PostComponent.css'

interface IPostProps {
    post: IPost;
}


export const PostComponent = ({post}: IPostProps) => {
    return (
        <>
            <div className={'post-page'}>
                <p><b>ID</b>: {post.id}</p>
                <p><b>TITLE</b>: {post.title}</p>
                <p><b>BODY</b>: {post.body}</p>
            </div>
        </>
    );
};