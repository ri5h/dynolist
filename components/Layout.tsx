import { ReactNode } from "react";
import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
import { useConfig } from "../data/hooks/useConfig";

type LayoutProps = {
    children?: ReactNode
    title?: string
}

function Layout({ children, title = 'Title Here' }: LayoutProps) {

    const { data: config, error } = useConfig()

    if (error) return <h1>Something went wrong!</h1>
    if (!config) return <h1>Loading...</h1>

    return (
        <>
            <Head>
                <title>{config.appName}</title>
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

export default Layout