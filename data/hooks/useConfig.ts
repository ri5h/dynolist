import useSWR from "swr"
import fetcher from "./fetcher"

type TButtonType = {
    text: string,
    link: string,
}

export type TConfigType = {
    logo: string,
    title: string,
    subtitle: string,
    button: TButtonType,
    secondaryButton?: TButtonType,
    footer: string,
    copyright: string
}

const url = `/api/atconfig`

export const useConfig = () => {
    const { data, error } = useSWR<TConfigType, String>(url, fetcher)
    return { data, error }
}