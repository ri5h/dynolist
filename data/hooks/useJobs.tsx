import useSWR from 'swr'
import { TJobType } from '../../components/Jobs/JobSingle'
import fetcher from './fetcher'

const url = `/api/atjobs`

export type TJobsType = Array<TJobType>

export const useJobs = () => {
    const { data, error } = useSWR<TJobsType, String>(url, fetcher)
    return { data, error }
}