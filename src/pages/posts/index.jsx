import Link from 'next/link'

export default function Posts({ posts }) {
    return (
        <>
            <ul>
                {posts.posts.map((post) => (
                    <li><Link href={`/posts/${post.id}`} key={post.id}>{post.title}</Link></li>
                ))}
            </ul>
        </>
    )
}


export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}