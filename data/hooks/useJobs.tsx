import useSWR from 'swr'
import fetcher from './fetcher'

const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

function useJobs() {
    const { data, error } = useSWR(url, fetcher)

    return {
        jobs: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useJobs