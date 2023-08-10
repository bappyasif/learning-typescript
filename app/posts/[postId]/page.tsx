import { getPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from "next/navigation"
import getFormattedDate from '@/lib/getFormattedDate';
import Link from 'next/link';

// now using this will turnj our ssr into ssg, and out site will be pre-renderd by nextjs in advance it build time
export function generateStaticParams() {
    const posts = getSortedPostsData(); // de-deuped
    return posts.map((post) => ({postId: post.id}))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
    // fetch requests are deduped by default in nextjs
    // if we want to de duped a function that is not using fetch, we can use React cache()
    const posts = getSortedPostsData();
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: "Post is not found!!"
        }
    }

    return {
        title: `Currently viewing: ${post.title}`
    }
}

async function Post({ params }: { params: { postId: string } }) {
    // fetch requests are deduped by default in nextjs
    // if we want to de duped a function that is not using fetch, we can use React cache()
    const posts = getSortedPostsData();
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        notFound()
    }
    const { title, date, contentHtml } = await getPostData(postId)
    const publishedDate = getFormattedDate(date);

    return (
        <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
            <h1 className="text-3xl mt-4 mb-0">{title}</h1>
            <p className="mt-0">
                {publishedDate}
            </p>
            <article>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p>
                    <Link href="/">← Back to home</Link>
                </p>
            </article>
        </main>
    )
}

export default Post