import { JobType } from './JobSingle'
import JobSingle from './JobSingle'
import jobsApi from '../../../hooks/getJobs'

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

    let pikachu = jobsApi()
    console.log(pikachu)

    return (
        <div>
            {jobs.map((job: JobType) =>
                <JobSingle {...job} />
            )}
        </div>
    )
}