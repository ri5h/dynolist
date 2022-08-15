import Logo from './Header/Logo'
import { useConfig } from '../data/hooks/useConfig';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';


// type TFooterType = {
//     title: string,
//     subtitle: string,
//     subtitle2?: string,
//     copyright: string
// }

// const provideData = (): Footer => {
//     return {
//         title: "Create. Preview. Publish.",
//         subtitle: "Most of our data is scraped from the best sources across the internet (Stackoverflow, LinkedIn, ...).",
//         subtitle2: "Made with ❤️ in Munich.",
//         copyright: "© 2020 DynoList. All rights reserved"
//     };
// }

export default function Footer() {

    const { data: config, error } = useConfig()

    if (error) return <h1>Something went wrong!</h1>
    if (!config) return <h1>Loading...</h1>

    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-16 lg:pt-24 flex flex-col items-center justify-center">
                    <div>
                        <Logo large />
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        {/* <h1 className="text-2xl font-black">{title}</h1>
                        <p className="text-md text-gray-600 text-center">
                            {subtitle}
                        </p> */}
                        <ReactMarkdown children={config.footer} remarkPlugins={[remarkGfm]} />
                        {/* <p>
                            {config.footer}
                        </p> */}
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className="md:mr-6 pb-4 md:py-0 cursor-pointer">{config.button.text}</h2>
                            {config.secondaryButton &&
                                <h2 className="cursor-pointer">{config.secondaryButton.text}</h2>
                            }
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l mt-6">
                            <p>{config.copyright}</p>
                            {/* {subtitle2 && <p className="text-md text-gray-600 text-center">
                                {subtitle2}
                            </p>} */}
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                </div>
            </div>
        </>
    );
}