"use client"
import { Posts } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
interface RenderPostProps {
    post: Posts
}

export const RenderPost = ({ post }: RenderPostProps) => {
    return (
        <Link href={`/posts/${post._id}`}>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{post.description}</p>
            </div>
        </Link>
    )
}

const RenderPosts = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(true);

    const getAllPosts = async () => {
        try {
            const res = await fetch('/api/posts', { method: "GET" })
            const data = await res.json();
            setPosts(data.posts || []);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllPosts();
    }, [])

    if (loading) {
        return <div className="text-center text-gray-500">Loading posts...</div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((item) => <RenderPost key={item._id.toString()} post={item} />)}
        </div>
    )
}

export default RenderPosts