import './main.css'
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div className='bg-img-main'>
            <Link to={'/student/select'} className='sickcall-btn'></Link>
        </div>
    );
}

