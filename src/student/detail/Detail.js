import './Detail.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Detail() {

    const location = useLocation()
    console.log(location.state)

    if (location.state === null) {
        window.location = "sick-call/student/select"
    }

    return (
        <div className='bg-img-stu-select'>
            <div className='header'>
                <Link to={'/'} className='to-home'></Link>
            </div>
            <div className='detail-wrap'>
                <p className='detail-hos detail-hos-name'>{location.state.name}</p>
                <p className='detail-hos detail-hos-address'>{location.state.address}</p>
                <Link to="/" className='call-btn'>호출하기</Link>
            </div>
        </div>
    )

}