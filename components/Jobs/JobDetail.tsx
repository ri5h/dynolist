import { JobType } from "./JobSingle";

export default function JobDetail(description: string) {

    return <div>
        job details
        {description && <p>{description}</p>}
    </div>

}