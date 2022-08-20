import { useConfig } from "../../data/hooks/useConfig";

export default function Logo({ large = false }: { large?: boolean }) {

    const { data: config, error } = useConfig()

    if (error) return <h1>Something went wrong!</h1>
    if (!config) return <h1>Loading...</h1>

    return (
        <img
            className={`w-auto mb-4 ${large ? "h-24" : "h-12"}`}
            src={config.logoLarge}
            alt={`${config.appName} Logo`}
        />
    );
};