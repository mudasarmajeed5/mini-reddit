"use client"
import { deleteComment } from "@/actions/add-comment"
import { useActionState } from "react"
const DeleteComment = ({ postId, comment, idx }: { postId: string, comment: string, idx: number }) => {
    const [error, submitAction, isPending] = useActionState(deleteComment, null);
    return (
        <>
            <span className="bg-blue-900/20 flex-1 p-2 rounded-xl">{comment}</span>
            <form action={submitAction}>
                <input type="hidden" name="postid" value={postId} />
                <input type="hidden" name="idx" value={idx} />
                <button className="text-red-500 bg-blue-800/30 p-2 rounded-xl cursor-pointer">
                    Delete
                </button>
            </form>
        </>
    )
}

export default DeleteComment