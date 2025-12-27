import { createPost } from "@/actions/create-post"
const CreatePost = () => {
    return (
        <>
            <form action={createPost} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-200">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title of post"
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-200">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Post description"
                        rows={6}
                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                    Create Post
                </button>
            </form>
        </>
    )
}

export default CreatePost