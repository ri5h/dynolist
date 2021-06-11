import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable, { Records, Record, FieldSet } from "airtable"

const baseName = process.env.AIRTABLE_BASE_NAME || "DEFINE_ME"
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(baseName)


// maps over the records, calling minifyRecord, giving us required data
const getMinifiedRecords = (records: Records<FieldSet>): SingleRecord[] => {
    return records.map((record: Record<FieldSet>) => minifyRecord(record))
};

// // gets the data we want and puts it into variables
const minifyRecord = (record: Record<FieldSet>): SingleRecord => {
    return {
        id: record.id,
        fields: record.fields,
    };
};

export const getSettings = async () => {
    const tableName = process.env.AIRTABLE_SETTING_TABLE || "DEFINE_ME"
    const table = base.table(tableName)
}


export const getContent = async () => {
    const tableName = process.env.AIRTABLE_CONTENT_TABLE || "DEFINE_ME"
    const table = base.table(tableName)

    const records = await table.select({}).all()
    const minifiedRecords = getMinifiedRecords(records)

    const reqContentIds = ['header', 'list', 'footer']

    let resContent: Content = <any>{}

    minifiedRecords
        .filter(rec => reqContentIds.includes(rec.fields.Id))
        .forEach(rec => {
            resContent[rec.fields.Id] = {
                id: rec.fields.Id,
                type: rec.fields.Type,
                title: rec.fields.Title || "",
                text: rec.fields.Text || "",
            }
        })
    return resContent
}