import Airtable, { FieldSet, Record } from "airtable"
import { NextApiRequest, NextApiResponse } from "next"
import { JobType } from "../../components/Jobs/JobSingle"
import { JobsType } from "../../data/hooks/useJobs"

const Config = {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: process.env.AIRTABLE_BASE_ID
}

const toJobType = (record: Record<FieldSet>): JobType => {
    return {
        title: record.get('title') as string,
        company: record.get('company') as string,
        address: record.get('address') as string,
        salary: record.get('salary') as string,
        img: record.get('image') as string,
        description: record.get('description') as string
    }
}

export default (req: NextApiRequest, res: NextApiResponse<JobsType>) => {

    let jobs: Array<JobType> = [];

    if (!Config.baseId) {
        return res.status(500)
    }

    // const base = new Airtable({ apiKey: Config.apiKey }).base(Config.baseId);
    var base = new Airtable({ apiKey: 'keyvw8jEKxemKuj0j' }).base('appRWuC5U6rnQSqq5');

    base('jobs')
        .select({ view: "Grid view" })
        .eachPage(
            function page(records, fetchNextPage) {

                records.forEach(function (record) {
                    console.log('Retrieved', record.get('title'));
                    jobs.push(toJobType(record))
                });

                // To fetch the next page of records, call `fetchNextPage`.
                // If there are more records, `page` will get called again.
                // If there are no more records, `done` will get called.
                fetchNextPage();

            },
            function done(err) {
                if (err) {
                    console.error(err);
                    return res.status(500);
                }
                return res.status(200).json(jobs);
            }
        )
}
