import useSWR from 'swr'
import { JobType } from '../../components/Jobs/JobSingle'
import fetcher from './fetcher'

// const url = `/api/jobs`
const url = `/api/atjobs`

export type JobsType = Array<JobType>

export const useJobs = () => {
    const { data, error } = useSWR<JobsType, String>(url, fetcher)
    return { data, error }
}