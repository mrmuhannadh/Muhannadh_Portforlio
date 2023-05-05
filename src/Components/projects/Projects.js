import React from 'react'
import '../../CSS/projects.css'
import hms from '../../Source/Images/Projects/HMS.png'
import oba from '../../Source/Images/Projects/oba.png'
import port from '../../Source/Images/Projects/port.png'
import tecmis from '../../Source/Images/Projects/tecmis.png'
import javaChat from '../../Source/Images/Projects/javaChat.PNG'
import adbms from '../../Source/Images/Projects/adbms.png'

const Projects = () => {
    return (
        <div className='container proSet'>
            <span className='eduTopic'  data-aos="fade-right">
                Projects
            </span>

            <div className='row'>
                <div className='col-md-4 myPro' data-aos="zoom-in-right">
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
                        <h4>Hostel Managment System for Faculty of Technology, University of Ruhuna</h4>
                        <p>Used Technology: Codelgniter 4, Bootstrap 5 <br />
                            <a href="https://github.com/mrmuhannadh/HMS.git" target="_blank" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro' data-aos="zoom-in-up">
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
                        <h4>Web site for Old Boys Association</h4>
                        <p>Used Technology: React JS, React Bootstrap<br />
                            <a href="https://github.com/mrmuhannadh/OBA.git" target="_blank" className='linkPro'>View Code</a> <br />
                            <a href="https://ontest.alazharccdoba.org/" target="_blank" className='linkPro'>Demo</a>
                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro' data-aos="zoom-in-left">
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
                        <h4>Personal Portfolio</h4>
                        <p>Used Technology: React JS, React Bootstrap<br />
                            <a href="https://github.com/mrmuhannadh/Muhannadh_Portforlio.git"  target="_blank" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 myPro'  data-aos="zoom-in-right">
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">
                                <div>

                                    <img src={tecmis}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h4>Redesigned TECMIS for Faculty of Technology, University of Ruhuna</h4>
                        <p>Used Technology: HTML, CSS, JS, Bootstrap 5 <br />
                            <a href="https://github.com/mrmuhannadh/RedesignedTECMIS.git" target="_blank" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro'  data-aos="zoom-in-up">
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">

                                <div>

                                    <img src={javaChat}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h4>RMI chat application using Java</h4>
                        <p>Used Technology: Java<br />
                            <a href="https://github.com/mrmuhannadh/Java-Chat-Application.git" className='linkPro' target="_blank">View Code</a> <br />                        </p>
                    </div>
                </div>
                <div className='col-md-4 myPro'  data-aos="zoom-in-left">
                    <div class="iMac">
                        <div class="body">
                            <div class="shine">
                            </div>
                            <div class="screen">

                                <div>

                                    <img src={adbms}
                                        alt="hms"
                                        className='imgPro'
                                    />
                                </div>
                            </div>
                            <div class="logo"></div>
                        </div>
                        <div class="stand"></div>
                        <h4>Hotel Managment System</h4>
                        <p>Used Technology: React JS, Spring Boot, MySQL<br />
                            <a href="https://github.com/Elilvannan/ADBMS.git" target="_blank" className='linkPro'>View Code</a> <br />
                        </p>
                    </div>
                </div>

            </div>
            <div className='myShape5'></div>
        </div>
    )
}

export default Projects