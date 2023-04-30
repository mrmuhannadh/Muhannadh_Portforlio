import React from 'react'
import '../../CSS/aboutme.css'
import myimg from '../../Source/Images/myImgTrans.png'
import * as Icons from 'react-bootstrap-icons'

const FirstSet = () => {
    return (
        <div className='topSet'>
            <div className='container'>
                <div className='row w-100'>
                    <div className='myShape'></div>
                    <div className='col-md-6 col-sm-4 mydetails '>
                        <div className='container'>
                            <span className='myName'>
                                Hello, I'm <b>MUHANNADH</b>

                            </span>
                            <p>
                                Hello, welcome to my personal Portforlio
                            </p>
                        </div>

                        <div className='contactlinks '>
                            <div className='col'>
                                <Icons.Linkedin className='myIcon' />
                            </div>
                            <div className='col'>
                                <Icons.Github className='myIcon' />
                            </div>
                            <div className='col'>
                                <Icons.Facebook className='myIcon' />
                            </div>
                            <div className='col'>
                                <Icons.Whatsapp className='myIcon' />
                            </div>

                            
                        </div>

                    </div>
                    <div className='col-md-6 col-sm-8 imageSec'>
                        <img src={myimg}
                            alt="myimage"
                            className='myimage'
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstSet