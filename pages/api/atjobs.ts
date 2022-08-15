import { FieldSet, Record } from "airtable"
import { Attachment } from "airtable/lib/attachment"
import { NextApiRequest, NextApiResponse } from "next"
import { TJobType } from "../../components/Jobs/JobSingle"
import airtable from "../../data/hooks/airtable"
import { TJobsType } from "../../data/hooks/useJobs"

const getThumbNailUrl = (record: Record<FieldSet>): string => {
    const attachments = record.get('image') as Array<Attachment> | undefined
    if (Array.isArray(attachments) && attachments.length && attachments[0].thumbnails) {
        return attachments[0].thumbnails.small.url
    }
    return ""
}

const toJobType = (record: Record<FieldSet>): TJobType => {
    return {
        title: record.get('title') as string,
        company: record.get('company') as string,
        location: record.get('location') as string,
        salary: record.get('salary') as string,
        img: getThumbNailUrl(record),
        description: record.get('description') as string
    }
}

export default (req: NextApiRequest, res: NextApiResponse<TJobsType>) => {

    let jobs: Array<TJobType> = [];

    airtable('jobs')
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
