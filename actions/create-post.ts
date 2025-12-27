"use server"
import Posts from "@/models/posts";
import { connectDB } from "@/utils/db"

export async function createPost(formData: FormData) {
    try {
        await connectDB();
        const createdPost = await Posts.create({
            title: formData.get('title'),
            description: formData.get('description'),
        })
        await createdPost.save();
    } catch (error) {
    }
}