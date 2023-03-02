import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                    <Link href="/"> Home </Link>
                    <Link href="posts"> Posts </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}