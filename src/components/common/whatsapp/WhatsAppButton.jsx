import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {

    const [isHovered, setIsHovered] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target)) {
                setIsHovered(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <a
            href="https://wa.me/9205038806" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            ref={buttonRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            {isHovered ? <> chat with us </> : <></>}
        </a>
    );
};

export default WhatsAppButton;
