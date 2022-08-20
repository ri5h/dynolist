import { faBuildingLock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import JobDetail from './JobDetail'
import JobDetailToggle from './JobDetailToggle'

export type TJobType = {
    title: string,
    company: string,
    location: string,
    salary: string,
    img?: string,
    description?: string,
    link?: string
}

export default function JobSingle({ title, company, location, salary, img, description, link }: TJobType) {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col bg-white p-4 m-2 border-rounded border-1 border-gray'>
            <div className="flex flex-row ">
                <div className="place-self-center h-12 w-12">
                    <img src={img} alt={`${company} Logo`} className='object-cover' />
                </div>
                <div className="ml-4">
                    <h2 className="font-bold text-2xl text-indigo-600">{title}</h2>
                    <p className="flex flex-row font-medium text-black-200">
                        <div>
                            <FontAwesomeIcon icon={faBuildingLock} />
                            <span className="ml-1">{company}</span>
                        </div>
                        <div className="ml-4">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className="ml-1">{location}</span>
                        </div>
                    </p>
                </div>
                <div className="ml-auto">
                    <p className='font-bold'>{salary}</p>
                    {description && <JobDetailToggle isOpen={open} setOpen={setOpen} />}
                </div>
            </div>
            {description && open && link && <JobDetail description={description} link={link} />}
        </div>

    )
}