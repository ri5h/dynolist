import { ReactNode } from "react";
import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children?: ReactNode
    title?: string
}

export default function Layout({ children, title = 'Title Here' }: LayoutProps) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <body className="antialiased bg-gray-100 min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
        </>
    );

}