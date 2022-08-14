import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type TJobDetailToggleType = {
    isOpen: boolean,
    setOpen: CallableFunction
}

export default function JobDetailToggle({ isOpen, setOpen }: TJobDetailToggleType) {

    return <div
        className='float-right text-indigo-800 cursor-pointer'
        onClick={() => setOpen(!isOpen)}
    >
        {isOpen
            ? <FontAwesomeIcon icon={faAngleUp} />
            : <FontAwesomeIcon icon={faAngleDown} />
        }
        <span className="ml-1 select-none">View details</span>
    </div>

}