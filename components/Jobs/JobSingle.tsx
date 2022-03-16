export type JobType = {
    title: string,
    description: string
}

export default function JobSingle({ title, description }: JobType) {
    return <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
}