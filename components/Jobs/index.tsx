import { TJobType } from './JobSingle'
import JobSingle from './JobSingle'
import { useJobs } from '../../data/hooks/useJobs'

export default function Jobs() {
    const { data: jobs, error } = useJobs()

    if (error) return <h1>Something went wrong!</h1>
    if (!jobs) return <h1>Loading...</h1>

    return (
        <div className='max-w-7xl mx-auto'>
            {jobs.map((job: TJobType) =>
                < JobSingle {...job} />
            )}
        </div>
    )
}