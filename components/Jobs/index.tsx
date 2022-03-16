import { JobType } from './JobSingle'
import JobSingle from './JobSingle'
import useJobs from '../../data/hooks/useJobs'

type JobsType = Array<JobType>
let jobs = useJobs()

export default function Jobs() {
    return (
        <div>
            {jobs.map((job: JobType) =>
                <JobSingle {...job} />
            )}
        </div>
    )
}