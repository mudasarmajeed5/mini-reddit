import RenderComments from "@/components/render-comments";
import { RenderPost } from "@/components/render-posts";
import Post from "@/models/posts";
import { Posts } from "@/types";

interface ViewPostProps {
    params:
    Promise<{
        postid: string
    }>
}
export default async function ViewPost({ params }: ViewPostProps) {
    const { postid } = await params;
    const fetchedPost:Posts = await Post.findById(postid).lean();
    const safePost = {
        _id: fetchedPost._id.toString(), 
        title: fetchedPost.title, 
        description: fetchedPost.description, 
        comments: fetchedPost.comments, 
        createdAt: fetchedPost.createdAt, 
        updatedAt: fetchedPost.updatedAt,
    }
    return (
        <div className="w-4/5 mx-auto mt-10">
            <RenderPost
            post={safePost} 
            key={postid.toString()}
            />
            <RenderComments comments={safePost.comments}/>
        </div>
    )
}
