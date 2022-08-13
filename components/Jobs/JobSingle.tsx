import { faAngleDown, faAngleUp, faBuildingLock, faLocation, faLocationDot, faMapLocation, faMarker, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export type JobType = {
    title: string,
    company: string,
    address: string,
    salary: string,
    img?: string,
    description?: string
}

export default function JobSingle({ title, company, address, salary, img, description }: JobType) {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex flex-col bg-white p-4 m-2 border-rounded border-1 border-gray'>
            <div className="flex flex-row ">
                <div className="place-self-center">
                    <img src={img} alt="" />
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
                            <span className="ml-1">{address}</span>
                        </div>
                    </p>
                </div>
                <div className="ml-auto">
                    <p>Salary Range: {salary}</p>
                    {description &&
                        <div className='float-right text-indigo-800 cursor-pointer' onClick={() => setOpen(!open)}>
                            {open && <FontAwesomeIcon icon={faAngleUp} />}
                            {!open && <FontAwesomeIcon icon={faAngleDown} />}
                            <span className="ml-1 select-none">View details</span>
                        </div>
                    }
                </div>
            </div>
            {description &&
                <div className={`mt-4 ${open ? 'block' : 'hidden'}`}>
                    <ReactMarkdown children={description} remarkPlugins={[remarkGfm]} />
                </div>
            }
        </div>

    )
}