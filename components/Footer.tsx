import Logo from './Header/Logo'

type Footer = {
    title: string,
    subtitle: string,
    subtitle2?: string,
    copyright: string
}

const provideData = (): Footer => {
    return {
        title: "Create. Preview. Publish.",
        subtitle: "Most of our data is scraped from the best sources across the internet (Stackoverflow, LinkedIn, ...).",
        subtitle2: "Made with ❤️ in Munich.",
        copyright: "© 2020 DynoList. All rights reserved"
    };
}

export default function Footer() {

    let { title, subtitle, subtitle2, copyright } = provideData();

    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-16 lg:pt-24 flex flex-col items-center justify-center">
                    <div>
                        <Logo />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">{title}</h1>
                        <p className="text-md text-gray-600 text-center">
                            {subtitle}
                        </p>
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Get started</h2>
                            <h2 className="cursor-pointer">Login</h2>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l mt-6">
                            <p>{copyright}</p>
                            {subtitle2 && <p className="text-md text-gray-600 text-center">
                                {subtitle2}
                            </p>}
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                </div>
            </div>
        </>
    );
}