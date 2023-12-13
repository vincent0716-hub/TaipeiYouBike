"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/ubikeLogo.png'
import MobileMenu from './MobileMenu'
export type MenuFrom = {
    MenuUrl: string
    titleText: string
}
type MenuProps = {
    title?: MenuFrom[],
    currentPage?: string
}
const MenuBar = ({ title, currentPage }: MenuProps) => {
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkWindowWidth = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        checkWindowWidth(); // Check on initial render

        window.addEventListener('resize', checkWindowWidth); // Check on window resize

        return () => {
            window.removeEventListener('resize', checkWindowWidth); // Cleanup event listener
        };
    }, []);
    return (<div>
        <nav style={{ backgroundColor: '#FFFFFF', padding: isMobile ? '1.5rem ' : '1rem 10rem', borderBottom: '2px solid #F2F2F2' }}>
            {isMobile ? (
                // Render mobile menu components
                <MobileMenu title={title} currentPage={currentPage} />
            ) : (
                <ul className="flex"><Image
                    src={Logo}
                    alt=""
                    style={{ width: '70px', height: '70px', marginRight: '1rem' }}
                    width={500}
                    height={300}
                />
                    {title ? (
                        title.map((item: MenuFrom, index: any) => (
                            <li key={index} style={{
                                padding: '1.5rem 0.5rem',
                                marginRight: '3rem',
                                color: currentPage === item.MenuUrl ? '#CDE336' : '#6F7C24'
                            }}
                            >
                                <Link href={`/YouBike/${item.MenuUrl}`}>

                                    {item.titleText}

                                </Link>
                            </li>
                        ))
                    ) : (
                        <li style={{
                            padding: '1.5rem 0.5rem',
                            marginRight: '3rem',
                            color: '#8A9730',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease-in-out',
                        }}>
                            <Link href="/YouBike" style={{ marginRight: '1rem', color: '#8A9730', textDecoration: 'none' }} className="hover:text-green-300">
                                YouBike
                            </Link>
                        </li>
                    )}
                    {/* Add more menu items as needed */}
                    <li style={{
                        marginLeft: 'auto',
                    }}>
                        <button
                            style={{
                                backgroundColor: '#CDE336',
                                color: '#ffffff',
                                marginTop: '1rem',
                                padding: '0.5rem 1.5rem',
                                borderRadius: '10rem',
                                cursor: 'pointer',
                                border: 'none',
                                transition: 'background-color 0.3s ease-in-out',
                            }}

                        >
                            登入
                        </button>
                    </li>
                </ul>
            )}


        </nav ></div>
    );
};
export default MenuBar;