import type { NextApiRequest, NextApiResponse } from 'next'
import { TJobsType } from '../../data/hooks/useJobs'


const jobs = [
    {
        "title": "PHP Entwickler",
        "company": "Honeypot GmbH",
        "address": "Schlesische Straße 26, Berlin",
        "salary": "70.000 - 100.000 EUR",
        "img": "img/company.jpeg"
    }
]


export default (req: NextApiRequest, res: NextApiResponse<TJobsType>) => {
    res.status(200).json(jobs)
}