import Airtable from "airtable";

const Config = {
    apiKey: process.env.AIRTABLE_API_KEY as string,
    baseId: process.env.AIRTABLE_BASE_ID as string
}

const airtable = (table: string) => new Airtable({ apiKey: Config.apiKey }).base(Config.baseId)(table)

export default airtable