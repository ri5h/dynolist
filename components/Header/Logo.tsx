import { useConfig } from "../../data/hooks/useConfig";

export default function Logo(large: { large?: boolean }) {

    const { data: config, error } = useConfig()

    if (error) return <h1>Something went wrong!</h1>
    if (!config) return <h1>Loading...</h1>

    return (
        <img
            className="h-24 w-auto mb-4"
            src={large ? config.logoLarge : config.logo}
            alt=""
        />
    );
};