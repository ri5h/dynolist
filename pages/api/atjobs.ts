import Airtable, { FieldSet, Record } from "airtable"
import { Attachment } from "airtable/lib/attachment"
import { NextApiRequest, NextApiResponse } from "next"
import { JobType } from "../../components/Jobs/JobSingle"
import { JobsType } from "../../data/hooks/useJobs"

const Config = {
    apiKey: process.env.AIRTABLE_API_KEY,
    baseId: process.env.AIRTABLE_BASE_ID
}

const getThumbNailUrl = (record: Record<FieldSet>): string => {
    const attachments = record.get('image') as Array<Attachment> | undefined
    if (Array.isArray(attachments) && attachments.length && attachments[0].thumbnails) {
        return attachments[0].thumbnails.small.url
    }
    return ""
}

const toJobType = (record: Record<FieldSet>): JobType => {
    return {
        title: record.get('title') as string,
        company: record.get('company') as string,
        location: record.get('location') as string,
        salary: record.get('salary') as string,
        img: getThumbNailUrl(record),
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
                records.forEach((record) => jobs.push(toJobType(record)));
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
