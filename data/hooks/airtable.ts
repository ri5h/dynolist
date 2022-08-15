import Airtable from "airtable";

const Config = {
    apiKey: process.env.AIRTABLE_API_KEY as string,
    baseId: process.env.AIRTABLE_BASE_ID as string
}

// var base = new Airtable({ apiKey: 'keyvw8jEKxemKuj0j' }).base('appRWuC5U6rnQSqq5');

const airtable = (table: string) => new Airtable({ apiKey: Config.apiKey }).base(Config.baseId)(table)

export default airtable