import { JobType } from './JobSingle'
import JobSingle from './JobSingle'

type JobsType = Array<JobType>

const getJobs = (): JobsType => {
    return [
        {
            title: "Job Title2",
            description: "Job Description"
        }
    ]
}

export default function Jobs() {
    let jobs = getJobs()
    return (
        <div>
            {jobs.map((job: JobType) =>
                <JobSingle {...job} />
            )}
        </div>
    )
}