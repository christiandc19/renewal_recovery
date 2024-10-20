import React from 'react'
import './DualDiagnosis.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './DualDiagnosisProgram'
import Services from '../../LandingPage/Services'
import Insurance from '../../LandingPage/Insurance'


const DualDiagnosis = () => {
    return (
<>        
<div className='dual-diagnosis-program'>
        <div className="dual-diagnosis-program-content container">
            <div className="content">
                <h1>Dual Diagnosis Program</h1>
                <h2>Discover The Therapies & Modalities We Use To Help Patients Recover</h2>
            </div>
        </div>

</div>
<DualDiagnosisProgram />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default DualDiagnosis
