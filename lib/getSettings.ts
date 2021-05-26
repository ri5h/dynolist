import Airtable, { Base, Records, Record, FieldSet } from "airtable";
import { getSiteSettings } from "./siteSettingService";

const baseName = process.env.NEXT_PUBLIC_AIRTABLE_BASE_NAME || "DEFINE_ME"
// const base = Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY }).base(baseName);
const base = new Airtable({
    apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base(baseName);

const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME || "DEFINE_ME"
const table = base.table(tableName)


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>) => {
    return records.map((record: Record<FieldSet>) => minifyRecord(record));
};

// // gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>) => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

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
export default async function getSettings(): Promise<SiteSettings> {

    const records = await table.select({}).all();
    const minifiedRecords = getMinifiedRecords(records);

    console.log(minifiedRecords);

    // return minifiedRecords;
    return getSiteSettings();
}