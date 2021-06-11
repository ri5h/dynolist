import type { NextApiRequest, NextApiResponse } from 'next'

import Airtable, { Base, Records, Record, FieldSet } from "airtable";
// import { getSiteSettings } from "./siteSettingService";

const baseName = process.env.AIRTABLE_BASE_NAME || "DEFINE_ME"
// const base = Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY }).base(baseName);
const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base(baseName);

const tableName = process.env.AIRTABLE_LIST_TABLE_NAME || "DEFINE_ME"
const table = base.table(tableName)


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>): SingleRecord[] => {
    return records.map((record: Record<FieldSet>) => minifyRecord(record));
};

// // gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>): SingleRecord => {
    return {
        id: record.id,
        fields: record.fields,
    };
};



export default async (req: NextApiRequest, res: NextApiResponse<Settings>) => {

    const records = await table.select({ maxRecords: 5 }).all();
    const minifiedRecords = getMinifiedRecords(records);
    //console.log(minifiedRecords)

    res.status(200).json({ records: minifiedRecords })

    // console.log(minifiedRecords);

    // return minifiedRecords;
    // return getSiteSettings();
}

// export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
//     res.status(200).json({ name: 'John Doe' })
// }
