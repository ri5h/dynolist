import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TJobType } from "./JobSingle";

type TJobDetailType = {
    description: string,
    link: string
}

export default function JobDetail({ description, link }: TJobDetailType) {
    return <div>
        {description &&
            <div className={`mt-4 p-4`}>
                <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                    <div className="rounded-md shadow cursor-pointer w-80">
                        <a
                            href={link}
                            target="_blank"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        }
    </div>
}