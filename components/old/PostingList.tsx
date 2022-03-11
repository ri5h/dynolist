type Posting = {
    title: string
    body: string
}

type PostingList = Posting[]


const PostingList = () => {
    return (
        <div>
            List of posting
        </div>
    )
}

export default PostingList
