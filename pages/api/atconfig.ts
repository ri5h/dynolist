import { Attachment, FieldSet, Record } from "airtable"
import { NextApiRequest, NextApiResponse } from "next"
import airtable from "../../data/hooks/airtable"
import { TConfigType } from "../../data/hooks/useConfig"



const getThumbNailUrl = (record: Record<FieldSet>): string => {
    const attachments = record.get('image') as Array<Attachment> | undefined
    if (Array.isArray(attachments) && attachments.length && attachments[0].thumbnails) {
        return attachments[0].thumbnails.small.url
    }
    return ""
}


const toConfigType = (record: Record<FieldSet>): TConfigType => {
    return {
        logo: getThumbNailUrl(record),
        title: record.get('title') as string,
        subtitle: record.get('subtitle') as string,
        button: {
            text: record.get('buttonText') as string,
            link: record.get('link') as string
        },
        secondaryButton: {
            text: record.get('button2Text') as string,
            link: record.get('link') as string
        },
        footer: record.get('footer') as string,
        copyright: record.get('copyright') as string

    }
}

export default (req: NextApiRequest, res: NextApiResponse<TConfigType>) => {

    let config = {};
    airtable('config')
        .select({ view: "Grid view", maxRecords: 1 })
        .eachPage(
            function page(records, fetchNextPage) {
                config = toConfigType(records[0])
                fetchNextPage();
            },
            function done(err) {
                if (err) {
                    console.error(err);
                    return res.status(500);
                }
                return res.status(200).json(config);
            }
        )
}
