import { NextApiRequest, NextApiResponse } from "next"
import { JobsType } from "../../data/hooks/useJobs"

export default (req: NextApiRequest, res: NextApiResponse<JobsType>) => {
    res.status(200).json(jobs)
}