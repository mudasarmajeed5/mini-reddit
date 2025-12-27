import RenderComments from "@/components/render-comments";
import Post from "@/models/posts";
import { Posts } from "@/types";
import Link from "next/link";

interface ViewPostProps {
    params:
    Promise<{
        postid: string
    }>
}

export default async function ViewPost({ params }: ViewPostProps) {
    const { postid } = await params;
    const fetchedPost: Posts = await Post.findById(postid).lean();
    const safePost = {
        _id: fetchedPost._id,
        title: fetchedPost.title,
        description: fetchedPost.description,
        comments: fetchedPost.comments,
        createdAt: fetchedPost.createdAt,
        updatedAt: fetchedPost.updatedAt,
    }
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10 transition-colors duration-300">
                <div className="w-4/5 mx-auto py-4 flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>

            <div className="w-4/5 mx-auto mt-6">
                {/* Post */}
                <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 mb-6 transition-colors duration-300">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 transition-colors">{safePost.title}</h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 transition-colors">
                        Posted on {new Date(safePost.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg transition-colors">{safePost.description}</p>
                </div>

                {/* Comments section */}
                <div className="text-gray-700 dark:text-gray-300 transition-colors">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors">Comments</h2>
                    <RenderComments comments={safePost.comments} />
                </div>
            </div>
        </div>
    )
}
