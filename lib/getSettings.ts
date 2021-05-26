// import Airtable, { Base, Records, Record, FieldSet } from "airtable";
// import { getSiteSettings } from "./siteSettingService";

// const baseName = process.env.NEXT_PUBLIC_AIRTABLE_BASE_NAME || "DEFINE_ME"
// // const base = Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY }).base(baseName);
// const base = new Airtable({
//     apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
// }).base(baseName);

// const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME || "DEFINE_ME"
// const table = base.table(tableName)


// // maps over the records, calling minifyRecord, giving us required data
// const getMinifiedRecords = (records: Records<FieldSet>) => {
//     return records.map((record: Record<FieldSet>) => minifyRecord(record));
// };

// // // gets the data we want and puts it into variables
// const minifyRecord = (record: Record<FieldSet>) => {
//     return {
//         id: record.id,
//         fields: record.fields,
//     };
// };

// export default async function getSettings() {
//     return base(tableName).select({
//         // Selecting the first 3 records in Grid view:
//         maxRecords: 3,
//         view: "Grid view"
//     }).eachPage(function page(records, fetchNextPage) {
//         // This function (`page`) will get called for each page of records.

//         records.forEach(function (record) {
//             console.log('Retrieved', record.get('key'));
//         });

//         // To fetch the next page of records, call `fetchNextPage`.
//         // If there are more records, `page` will get called again.
//         // If there are no more records, `done` will get called.
//         fetchNextPage();

//     }, function done(err) {
//         if (err) { console.error(err); return; }
//     });
// }

type JSONResponse = {
    data?: {
        settings: Settings
    }
    errors?: Array<{ message: string }>
}

export default async function getSettings(): Promise<SiteSettings> {

    let navigation: Navigation = [
        // { name: 'Product', href: '#' },
        // { name: 'Features', href: '#' },
        // { name: 'Marketplace', href: '#' },
        // { name: 'Company', href: '#' },
    ]

    let heading: Heading = {
        titleHead: "Proudly showcase",
        titleTail: "awesome directory"
    }

    let description = "Mina aute id magna aliqua ad ad non tundraset sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."


    const response = await fetch('http://localhost:3000/api/settings')
    const { records } = await response.json() as Settings

    if (response.ok) {

        records?.map((record: SingleRecord) => {
            console.log('existing heading', heading)
            switch (record.fields.key) {
                case 'heading':
                    console.log('updating heading')
                    heading = {
                        titleHead: record.fields.value.split("|")[0].trim(),
                        titleTail: record.fields.value.split("|")[1].trim(),
                    }
                    break;
                case 'description':
                    description = record.fields.value.trim()
                    break;
                default:
                    console.log('WhatTheCase', record.fields.key)
            }
        })
    } else {
        console.log('Server made a boo boo!')
    }

    return { navigation, heading, description }
}