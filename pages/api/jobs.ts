import type { NextApiRequest, NextApiResponse } from 'next'
import { TJobsType } from '../../data/hooks/useJobs'


const jobs = [
    {
        "title": "PHP Entwickler",
        "company": "Honeypot GmbH",
        "location": "Schlesische Straße 26, Berlin",
        "salary": "70.000 - 100.000 EUR",
        "img": "https://dl.airtable.com/.attachmentThumbnails/acd983f153aa3ed2a73cb10246e7583e/35e6e931?ts=1661012933&userId=usrQUK8UDUSlPCXtA&cs=e470fcbbc9cab8a7",
        "description": `**_This position is remote/work from home across the United States._**

Myriad Genetics is looking for a full-time candidate to fill the role of Billing Clerk II. The Billing Clerk II is responsible for Cash Posting.

**Responsibilities**

Daily tasks may include but are not limited to:

-   Posting payments received in the bank in the expected turnaround time
-   Reconcile daily cash deposits to the billing system and bank
-   Must be able to read and interpret explanation of benefits
-   Daily correspondence processing
-   Accurately and timely enter denial reason codes to patient accounts within the billing system
-   Post explanations of benefits (EOB’s), electronic remittances and patient checks to individual accounts in the billing system
-   Interacts with insurance providers, Reimbursement Specialist and Billing management in a timely and professional manner
-   Participates in the Quality Assurance plan & complies with all CLIA and HIPAA regulations
-   Proficiency in researching/managing open batches and resolving PLB batches
-   Identify and resolve visible EDI issues to get process started for enrollment and track for resolution
-   Xifin case management for existing issues to prevent duplicate cases and to apply resolution to payors across all BU’s
-   Assist in new hire/ongoing/process training with Billing/Accounting Coordinator
-   Credit card reconciliation & suspense management

**Qualifications**

-   **High school diploma or GED required**
-   2+ years of experience working in a medical office, laboratory, accounting, banking or health insurance setting with Cash Posting/Data Entry/System Reconciliation highly preferred
-   Working knowledge of ICD-10, CPT and HCPCS coding highly preferred
-   Excellent interpersonal and organizational skills
-   Demonstrate subject matter expertise (SME) in a job-related function
-   Demonstrate ability to achieve and sustain productivity for all primary KPI’s
-   Must be dependable, detail-oriented, professional, and able to work to meet daily and monthly deadlines
-   Must be able to lead Team Meetings
-   Able to type 40 WPM and possess excellent computer skills including Microsoft Office applications, specifically Excel
-   Excellent organizational, communication, multitasking, and teamwork

The physical demands described here are representative of those that must be met by an employee to successfully perform the essential functions of this job. While performing the duties of this job, the employee is frequently required to sit; talk; or hear. The employee is occasionally required to stand; walk; use hands to finger, handle, or feel; reach with hands and arms; and stoop; kneel; or crouch. The employee must occasionally lift and/or move up to 25 pounds. Specific vision abilities required by this job include close vision, distance vision and depth perception_`,
        "link": "https://example.com"
    }
]


export default (req: NextApiRequest, res: NextApiResponse<TJobsType>) => {
    res.status(200).json(jobs)
}