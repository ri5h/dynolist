import SingleItem from "./SingleItem"


const ListOfItems = ({ items }: ListOfItemsProps) => {
    console.log('items array', items.length)
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-3xl font-bold mt-10 mb-4 mx-auto text-center text-gray-700">The List</div>
            {items.map((item: ItemProps) => <SingleItem {...item} key={item.title} />)}
        </div>
    )
}

export default ListOfItems
