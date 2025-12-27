"use server"
import Post from "@/models/posts";
import { connectDB } from "@/utils/db";
import { revalidatePath } from "next/cache";
export async function postComment(formData: FormData) {
    const comment = formData.get('comment');
    const postId = formData.get('postId');
    try {
        await connectDB();
        await Post.findOneAndUpdate({ _id: postId }, {
            $push: { comments: comment }
        })

    } catch (error) {
        console.log(error);
    }
}

export async function deleteComment(
    _prevState: null,
    formData: FormData
) {
    const indexToDelete = Number(formData.get('idx'))
    const postId = formData.get('postid');
    await connectDB();
    try {
        const post = await Post.findOne({ _id: postId })
        const postComments = await post.comments;
        console.log(postComments[indexToDelete])
        
        const updated_comments = postComments.filter((item: string)=> item != postComments[indexToDelete]);
        post.comments = updated_comments;
        await post.save();
        revalidatePath(`/posts/${postId}`);
    } catch (error) {
        console.log((error as Error).message)
    }
    return null;
}