import React from 'react'
import '../../CSS/projects.css'
import sa from '../../Source/Images/myImgTrans.png'
import hms from '../../Source/Images/Projects/HMS.png'
import oba from '../../Source/Images/Projects/oba.png'
import port from '../../Source/Images/Projects/port.png'

const Projects = () => {
    return (
        <div className='container proSet'>
            <span className='eduTopic'>
                Projects
            </span>

            <div className='row'>
                <div className='col-md-4 myPro'>
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">
                                <div>

                                    <img src={hms}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h3>Hostel Managment System for Faculty of Technology, University of Ruhuna</h3>
                        <p>Used Technology: Codelgniter 4, Bootstrap 5 <br />
                            <a href="" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro'>
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">

                                <div>

                                    <img src={oba}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h3>Web site for Old Boys Association</h3>
                        <p>Used Technology: React JS, React Bootstrap<br />
                            <a href="" className='linkPro'>View Code</a> <br />
                            <a href="https://ontest.alazharccdoba.org/" className='linkPro'>Demo</a>
                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro'>
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">

                                <div>

                                    <img src={port}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h3>Personal Portforlio</h3>
                        <p>Used Technology: React JS, React Bootstrap<br />
                            <a href="" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>

            </div>
            <div className='myShape5'></div>
        </div>
    )
}

export default Projects