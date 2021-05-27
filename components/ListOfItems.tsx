import SingleItem from "./SingleItem"


const ListOfItems = ({ items }: ListOfItemsProps) => {
    console.log('items array', items.length)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-3xl font-bold my-10 mx-auto text-center text-gray-700">The List</div>
            {items[0].title}
            {items.map((item: ItemProps) => <SingleItem {...item} />)}
        </div>
    )
}

export default ListOfItems
