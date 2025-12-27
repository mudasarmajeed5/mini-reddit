"use client"

import { editTitle } from "@/actions/edit-title";
import { useActionState } from "react"

const EditTitle = (
    { postId, initialTitle }: 
    { postId: string, initialTitle: string }
    ) => {
    const [error, submitAction, isPending] = 
    useActionState(editTitle, null);
    return (
        <form action={submitAction} className="flex flex-col">
            <input type="hidden" name="postid" value={postId} />
            <div className="flex gap-1">
                <input
                    name="title"
                    defaultValue={initialTitle}
                    className="px-2 py-1 flex-1 bg-blue-800/10 rounded-xl"
                />
                <button className="text bg-blue-800/50 px-2 py-1 rounded-md" disabled={isPending}>
                    {isPending ? "Saving..." : "Save"}
                </button>

            </div>

            {error && <p className="text-red-500">{error}</p>}
        </form>
    )
}

export default EditTitle