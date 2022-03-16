import useSWR from 'swr'
import fetcher from './fetcher'

const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

function getJobs() {
    const { data, error } = useSWR(url, fetcher)

    return {
        user: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default getJobs