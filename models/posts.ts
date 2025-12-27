import mongoose, { ObjectId, Schema } from "mongoose";
type PostsDB = {
    _id: ObjectId
    title: string, 
    description: string, 
    comments: [string], 
    createdAt: Date, 
    updatedAt: Date,
}
const PostSchema = new Schema<PostsDB>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    comments: [String],
},
    {
        timestamps: true
    }
)

const Post = mongoose.models.Post || mongoose.model<PostsDB>("Post", PostSchema);
export default Post;
