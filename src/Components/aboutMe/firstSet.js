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
                                Hello, welcome to my personal Portfolio
                            </p>
                        </div>

                        <div className='contactlinks '>
                            <div className='col'>
                                <a href="www.linkedin.com/in/razick-muhannadh" target="_blank">
                                    <Icons.Linkedin className='myIcon' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href="https://github.com/mrmuhannadh" target="_blank">
                                    <Icons.Github className='myIcon' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href="" target="_blank">
                                    <Icons.Facebook className='myIcon' />
                                </a>
                            </div>
                            <div className='col'>
                                <a href="https://wa.me/+94754092934" target="_blank">
                                    <Icons.Whatsapp className='myIcon' />
                                </a>
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