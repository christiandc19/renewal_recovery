import React from 'react'
import './MAT.css'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './MATProgram'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'


const Mat = () => {
    return (
<>        
<div className='mat-program '>
        <div className="mat-program-content container">
            <div className="content">
                <h1>Medication Assisted Program</h1>
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

export default Mat
