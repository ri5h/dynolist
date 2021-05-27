const SingleItem = ({ title, subtitle, body }: ItemProps) => {

    console.log('item', title)
    return (
        <div className="bg-white rounded border border-gray-100 shadow-md p-4 mb-4">
            <div className="font-extrabold text-lg text-gray-800">Title: {title}</div>
            <div className="font-semibold text-muted">Subtitle: {subtitle}</div>
            <div>Body: {body}</div>
        </div>
    )
}

export default SingleItem
