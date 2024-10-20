import React from 'react'
import './Icon.css'
import Logo from '../../svg/SBER.svg'

export const Sber = () => {
    
    return (
        <div>
            <svg 
            width="56" 
            height="56" 
            xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#a)" d="M0 0h56v56H0z"/>
                <path fill="url(#b)" d="M0 0h56v56H0z"/>
                <path d="M28 16c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12l-.001-.17 3.747-2.687c.167.927.254 1.882.254 2.857 0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16c3.815 0 7.318 1.335 10.068 3.564l-3.415 2.448A11.944 11.944 0 0 0 28 16z" fill="#fff"/>
                <path d="M42.658 21.576 28.043 32.054l-.022-.03-.02.03-5.973-4.282v-4.956l5.994 4.297 12.557-9.002a15.993 15.993 0 0 1 2.079 3.465z" fill="#fff"/>
                <defs>
                    <linearGradient id="a" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0E8FE2"/>
                        <stop offset="1" stop-color="#2EAE4C"/>
                    </linearGradient>
                    <linearGradient id="b" x1="11.06" y1="51.936" x2="46.34" y2="23.919" gradientUnits="userSpaceOnUse"><stop stop-color="#EFE436"/>
                        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}