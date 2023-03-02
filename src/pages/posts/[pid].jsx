export default function Post({ post }) {
    return (
        <>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
            <h3>{post.tags.map((tag)=>(<span>, {tag}</span>))}</h3>
            <h4>{post.reactions}</h4>
        </>
    )
}

export async function getStaticPaths() {
    const request  = await fetch('https://dummyjson.com/posts')
    const posts = await request.json()
    const paths = posts.posts.map((post) => ({
        params: { pid: post.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://dummyjson.com/posts/${params.pid}`)
    const post = await res.json()
    console.log(post)

    return {
        props: {
            post,
        },
    }
}