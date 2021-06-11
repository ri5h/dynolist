import { ReactNode } from "react";
import Navbar from "./Navbar";
import Head from 'next/head'
import Header from './Header'
import HeaderWithBG from "./HeaderWithBG";
import Footer from "./Footer";


type LayoutProps = {
    children?: ReactNode
    title?: string,
    settings: SiteSettings
}

export default function Layout({ children, title = 'Default', settings }: LayoutProps) {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="antialiased bg-gray-100 min-h-screen">
                <Header settings={settings} />

                {/* <Navbar /> */}
                {children}
                <Footer />
            </section>
        </>
    );

}