type RenderCommentProps = {
    comments: string[]
}
const RenderComments = ({ comments }: RenderCommentProps) => {
    return (
        <div>
            {comments.map((comment, idx) => <p key={idx}>
                {comment}
            </p>
            )}
        </div>
    )
}

export default RenderComments