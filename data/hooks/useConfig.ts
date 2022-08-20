import useSWR from "swr"
import fetcher from "./fetcher"

type TButtonType = {
    text: string,
    link: string,
}

export type TConfigType = {
    appName: string,
    logo: string,
    logoLarge: string,
    title: string,
    subtitle: string,
    button: TButtonType,
    secondaryButton?: TButtonType,
    footer: string,
    copyright: string,
    postajobLink: string,
}

const url = `/api/atconfig`

export const useConfig = () => {
    const { data, error } = useSWR<TConfigType, String>(url, fetcher)
    return { data, error }
}