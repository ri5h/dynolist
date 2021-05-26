import { ReactNode } from "react";
import Navbar from "./Navbar";
import { getSiteSettings } from '../lib/siteSettingService'
import Head from 'next/head'
import Header from './Header'
import getSettings from "../lib/getSettings";

type LayoutProps = {
    children?: ReactNode
    title?: string
}

const settings = getSiteSettings();

export default function Layout({ children, title = 'Default' }: LayoutProps) {

    getSettings().then(settings => updateSettings(settings))


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <section className="antialiased bg-gray-100 p-4">
                <Header settings={settings} />

                {/* <Navbar /> */}
                {children}
            </section>
        </>
    );

}

export function updateSettings(settings: SiteSettings): void {
    settings = settings
}