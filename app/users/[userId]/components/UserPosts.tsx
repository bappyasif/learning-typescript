type Props = {
    promise: Promise<Post[]>
}

async function UserPosts({ promise }: Props) {
    const posts = await promise

    const content = posts.map(post => {
        return (
            <article key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <br />
            </article>
        )
    })

    return (
        <div>
            <h1>User Posts</h1>
            {content}
        </div>
    )
}

export default UserPosts