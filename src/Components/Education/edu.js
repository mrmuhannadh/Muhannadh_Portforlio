import React from 'react'
import '../../CSS/edu.css'
import azhar from '../../Source/Logo/Logo.png'
import almanar from '../../Source/Logo/sclLogo.png'
import uor from '../../Source/Logo/uniLogo.png'
import AsNavFor from './skills'
import Skills from './skills'

const Edu = () => {
    return (
        <div className='eduSection'>
            <div className='myShape2'></div>
            <div className='container eduSet'>
                <span className='eduTopic' data-aos="fade-right">
                    Education
                </span>
                <div className='row'>
                    <div className='col-md-4 myBox' data-aos="fade-right" data-aos-delay="100">
                        <img src={azhar}
                            alt="scl logo"
                            className='sclLogo' />
                        Ordinary Level - Al-Azhar National School Dehianga, Kandy
                        <br />
                        Results: 3As 2Bs 4Cs
                    </div>
                    <div className='col-md-4 myBox' data-aos="fade-up">
                        <img src={almanar}
                            alt="scl logo"
                            className='sclLogo' />
                        Advanced Level - Al-Manar National School Handessa, Kandy
                        <br />
                        Course: Engineering Technology<br />
                        Results: 3Cs
                    </div>
                    <div className='col-md-4 myBox' data-aos="fade-left" data-aos-delay="100">
                        <img src={uor}
                            alt="scl logo"
                            className='sclLogo' />
                        Graduate BICT - Faculty of Technology, University of Ruhuna, Matara
                        <br />
                        GPA: 3.83 (First Class)
                    </div>
                </div>
                <div className='myShape3'></div>
                <div className='myShape4'></div>
                <span className='skillsTopic' data-aos="fade-down">
                    Skills
                </span>
                <Skills />
            </div>

        </div>
    )
}

export default Edu