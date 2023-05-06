import React from 'react'
import FancyCarousel from "react-fancy-circular-carousel";
import DevIcon from "devicon-react-svg";
import '../../CSS/slider.css'
import java from '../../Source/Logo/Languages/java.png'
import c from '../../Source/Logo/Languages/c.png'
import python from '../../Source/Logo/Languages/python.png'
import js from '../../Source/Logo/Languages/js.png'
import html from '../../Source/Logo/Languages/html.png'
import css from '../../Source/Logo/Languages/css.png'
import php from '../../Source/Logo/Languages/php.png'
import mysql from '../../Source/Logo/Languages/mysql.png'

import reactL from '../../Source/Logo/FrameWorks/react.png'
import node from '../../Source/Logo/FrameWorks/node.png'
import spring from '../../Source/Logo/FrameWorks/sb.png'
import boot from '../../Source/Logo/FrameWorks/boot.png'
import code from '../../Source/Logo/FrameWorks/cod.png'
import azure from '../../Source/Logo/FrameWorks/azure.png'
import ang from '../../Source/Logo/FrameWorks/ang.png'

const Skills = () => {
    const images = [java, c, python, js, html, css, php, mysql];
    const imagesFrame = [reactL, node, spring, boot, code, azure, ang];
    return (
        <div>
            <div className='langs'>
                <div className='row'>
                    <div className='col-md-6 prolang'>
                        <h3 data-aos="fade-down">Programming Languages</h3>
                        <div className='carousel' data-aos="fade-right">
                            <FancyCarousel
                                images={images}
                                className="langCau"
                                carouselRadius={150}
                                peripheralImageRadius={45}
                                centralImageRadius={60}
                                focusElementStyling={{ border: 'none' }}
                                autoRotateTime={4}
                                centralImageBoxShadow={'none'}
                                peripheralImageBoxShadow={'none'}
                                offsetAngle={1}
                                borderHexColor={'5A5A5A'}
                                borderWidth={3}
                            />
                        </div>
                    </div>
                    <div className='col-md-6 frames'>
                        <h3 data-aos="fade-down">Frameworks</h3>
                        <div className='carousel'
                            data-aos="fade-left">
                            <FancyCarousel
                                images={imagesFrame}
                                carouselRadius={150}
                                peripheralImageRadius={45}
                                centralImageRadius={60}
                                focusElementStyling={{ border: 'none' }}
                                autoRotateTime={3}
                                centralImageBoxShadow={'none'}
                                peripheralImageBoxShadow={'none'}
                                offsetAngle={1}
                                borderHexColor={'5A5A5A'}
                                borderWidth={3}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills