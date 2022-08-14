import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { JobType } from "./JobSingle";

type TJobDetailType = {
    description: string
}

export default function JobDetail({ description }: TJobDetailType) {
    return <div>
        {description &&
            <div className={`mt-4 p-4`}>
                <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
            </div>
        }
    </div>
}