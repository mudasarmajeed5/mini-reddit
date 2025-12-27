"use server"
import Post from "@/models/posts";
import { revalidatePath } from "next/cache";
import { connectDB } from "@/utils/db";
export async function editTitle(
    _prevState: string | null,
    formData: FormData
) {
    const newTitle = formData.get('title') as string;
    const postId = formData.get('postid') as string;
    if(!newTitle) return "Title is required."
    try {
        await connectDB();
        const post = await Post.findOne({ _id: postId });
        if (post) {
            post.title = newTitle;
            post.save();
            revalidatePath(`/posts/${postId}`);
        }
        return null;
    } catch (error) {
        console.log(error)
        return "something went wrong";
    }
}