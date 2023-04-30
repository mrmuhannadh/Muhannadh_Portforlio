import React from 'react'
import { useEffect, useState } from 'react'
import * as Icon from 'react-bootstrap-icons';

const UpButton = () => {
    const [backTopTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backTopTopButton && (
                <Icon.ArrowUpCircleFill className='btnToTop' size={40} onClick={scrollUp} />
            )}
        </div>
    )
}

export default UpButton