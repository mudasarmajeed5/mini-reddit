import { postComment } from "@/actions/add-comment"
import DeleteComment from "./delete-comment"
type RenderCommentProps = {
    comments: string[]
    postId: string
}
const CommentsSection = ({ comments, postId }: { comments: string[], postId: string }) => {
    if (comments.length > 0) {
        return <>
            {comments.map((comment, idx) => {
                return (
                    <div key={idx} className="flex gap-3 items-center m-1">
                        <DeleteComment idx={idx} postId={postId}
                        comment={comment}
                        />
                    </div>
                )
            })}
        </>
    }
    else {
        return <span className="text-gray-400 text-sm">No comments posted yet.</span>
    }
}
const RenderComments = ({ comments, postId }: RenderCommentProps) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <form action={postComment}>
                    <input type="hidden" name="postId" value={postId} />
                    <textarea cols={6} name="comment" id="comment" placeholder="Enter your comment" className="px-2 py-1 rounded-md w-full bg-blue-950/30" />
                    <button className="px-4 cursor-pointer py-2 mt-3 mb-2 hover:bg-blue-500 rounded-xl bg-blue-500/80">Post</button>
                </form>
            </div>
            <div className="flex flex-col">
                <CommentsSection postId={postId} comments={comments} />
            </div>
        </div>
    )
}

export default RenderComments