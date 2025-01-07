import {useEffect, useState} from "react";
import {getPosts} from "../../../services/post.api.service.ts";
import {IDummyModel} from "../../../models/i-dummy-model/IDummyModel.ts";
import {IPost} from "../../../models/i-posts-model/IPostsModel.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        getPosts().then((posts: IDummyModel) => {
            setPosts(posts.posts)
        })
    }, []);
    return (
        <>
            <div>
                {
                    posts.map(post => <PostComponent key={post.id} post={post}/>)
                }
            </div>
        </>
    );
};