import { connectDB } from "@/utils/db";
import Posts from "@/models/posts";
import { NextResponse } from "next/server";
export async function GET() {
    try {
        await connectDB();
        const data = await Posts.find({});
        return NextResponse.json({ posts: data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, {
            status: 500
        })
    }
}
export async function POST(){
    try {
        await connectDB();
    } catch (error) {
        
    }
}
