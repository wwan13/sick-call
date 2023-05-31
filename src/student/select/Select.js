import './Select.css'
import { useState } from 'react'
import HospitalInfo from './hospital-info/HospitalInfo'
import { Link } from 'react-router-dom'
import { HospitalAll, HospitalInternal, HospitalOphthalmology, HospitalOrthopedics, HospitalOtolaryngology } from './hospitalData/HospitalData'

export default function Select() {

    let [hospotals, setHospotals] = useState(HospitalAll);

    function init() {
        let btnWrap = document.getElementsByClassName('hospital-type-btn-select')
        for (let i = 0; i < btnWrap.length; i++) {
            btnWrap[i].className = 'hospital-type-btn'
        }
    }

    function btn1Handler(e) {
        if(e.target.className === 'hospital-type-btn') {
            init()
            setHospotals(HospitalOtolaryngology)
            e.target.className = 'hospital-type-btn-select'
        } else {
            init()
            setHospotals(HospitalAll)
            e.target.className = 'hospital-type-btn'
        }
    }

    function btn2Handler(e) {
        if(e.target.className === 'hospital-type-btn') {
            init()
            setHospotals(HospitalInternal)
            e.target.className = 'hospital-type-btn-select'
        } else {
            init()
            setHospotals(HospitalAll)
            e.target.className = 'hospital-type-btn'
        }
    }

    function btn3Handler(e) {
        if(e.target.className === 'hospital-type-btn') {
            init()
            setHospotals(HospitalOrthopedics)
            e.target.className = 'hospital-type-btn-select'
        } else {
            init()
            setHospotals(HospitalAll)
            e.target.className = 'hospital-type-btn'
        }
    }

    function btn4Handler(e) {
        if(e.target.className === 'hospital-type-btn') {
            init()
            setHospotals(HospitalOphthalmology)
            e.target.className = 'hospital-type-btn-select'
        } else {
            init()
            setHospotals(HospitalAll)
            e.target.className = 'hospital-type-btn'
        }
    }

    return (
        <div className='bg-img-stu-select'>
            <div className='header'>
            <Link to={'/'} className='to-home'></Link>
            </div>
            <div className='hospital-type-section'>
                <div className='hospital-btn-wrap'>
                    <button onClick={btn1Handler} className='hospital-type-btn'>이비인후과</button>
                    <button onClick={btn2Handler} className='hospital-type-btn'>내과</button>
                    <button onClick={btn3Handler} className='hospital-type-btn'>정형외과</button>
                    <button onClick={btn4Handler} className='hospital-type-btn'>안과</button>
                </div>
            </div>
            <div className='section-div'></div>
            <div className='hos-info-wrap'>
                {
                    hospotals.map((h) => {
                        return <HospitalInfo hosName={h.name} hosAddress={h.address} />
                    })
                }
            </div>
        </div>
    )
}