import Head from "./head"
import styles from "./styles.module.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {/* old way of including meta tags */}
            {/* <Head /> */}
            <nav>About Navbar</nav>
            <body className={inter.className}>
                <main className={styles.main}>
                    {children}
                </main>
            </body>
        </>
    )
}
