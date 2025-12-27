"use client"
import { Posts } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
interface RenderPostProps {
    post: Posts
}

const RenderPost = ({ post }: RenderPostProps) => {
    return (
        <Link href={`/posts/${post._id}`} className="block h-full">
            <div className="h-full p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 grow">
                    {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1">
                        💬 {post.comments.length} comments
                    </span>
                </div>
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
        return (
            <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-48 bg-gray-200 dark:bg-gray-800 rounded-xl animate-pulse"></div>
                ))}
            </div>
        )
    }

    return (
        <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((item) => <RenderPost key={item._id.toString()} post={item} />)}
        </div>
    )
}

export default RenderPosts