import './HospitalInfo.css'
import { Link } from 'react-router-dom'

export default function HospitalInfo(props) {
    return (
        <div className='hos-info'>
            <div className='name-address'>
                <p className='hos-name'>{props.hosName}</p>
                <p className='hos-address'>{props.hosAddress}</p>
            </div>
            <Link to="/student/select/detail" state={{
                name: props.hosName,
                address: props.hosAddress
            }} className='hos-select-btn'>선택</Link>
        </div>
    )
}