type JSONResponse = {
    data?: {
        settings: Settings
    }
    errors?: Array<{ message: string }>
}

let listOfItems: ItemProps[] = []

export default async function getListOfItems(): Promise<ItemProps[]> {

    const response = await fetch('http://localhost:3000/api/listOfItems')
    const { records } = await response.json() as Settings

    if (response.ok) {

        records?.map((record: SingleRecord) => {
            listOfItems.push({
                title: record.fields.Title.trim(),
                subtitle: record.fields.Description.trim(),
                body: record.fields.Details.trim(),
            })
            // switch (record.fields.Id) {
            //     case 'header':
            //         console.log('updating heading')
            //         let heading = {
            //             titleHead: record.fields.Title.trim(),
            //             titleTail: record.fields.Text.trim(),
            //         }
            //         break;
            //     case 'description':
            //         let description = record.fields.value.trim()
            //         break;
            //     default:
            //         console.log('WhatTheCase', record.fields.key)
            // }
        })
    } else {
        console.log('Server made a boo boo!')
    }

    return listOfItems
}
