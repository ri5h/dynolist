import { ReactNode } from "react";
import Navbar from "./Navbar";
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

export default function Layout({ children, title = 'Default' }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="w-full antialiased min-h-screen bg-gray-50">
                <Navbar />
                {children}
            </section>
        </>
    );
}