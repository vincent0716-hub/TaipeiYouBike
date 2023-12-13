
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/ubikeLogo.png'
import { IoMdMenu, IoMdClose } from "react-icons/io";
export type MenuFrom = {
    MenuUrl: string
    titleText: string
}
type MenuProps = {
    title?: MenuFrom[],
    currentPage?: string
}
const MobileMenu = ({ title, currentPage }: MenuProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <div>
            <ul className="flex"><Image
                src={Logo}
                alt=""
                style={{ width: '90px', height: '90px', marginRight: '1rem' }}
                width={500}
                height={300}
            />
                <li style={{
                    marginLeft: 'auto',
                    padding: '1.5rem 0.5rem',
                    marginRight: '',
                    color: '#CDE336',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease-in-out',
                }}>
                    <button
                        onClick={() => { isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }}
                    >
                        <IoMdMenu style={{ width: '30px', height: '30px', marginRight: '' }} />
                    </button>
                </li>
            </ul>

            {/** side menu */}
            <div className="flex min-h-screen flex-col  "
                style={{
                    backgroundColor: '#CDE336',
                    display: isMenuOpen ? '' : 'none',
                    position: 'fixed', // Use 'fixed' to position the menu relative to the viewport
                    top: 0,
                    left: 0,
                    width: '100%', // Cover the entire width of the viewport
                    height: '100%', // Cover the entire height of the viewport
                    zIndex: 1000, // Adjust the z-index as needed

                }}
            >
                <nav style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderBottom: '2px solid #F2F2F2' }}>
                    <ul className="flex"><Image
                        src={Logo}
                        alt=""
                        style={{ width: '90px', height: '90px', marginRight: '1rem' }}
                        width={500}
                        height={300}
                    />
                        <li style={{
                            marginLeft: 'auto',
                            padding: '1.5rem 0.5rem',
                            marginRight: '',
                            color: '#CDE336',
                            textDecoration: 'none',
                            transition: 'color 0.3s ease-in-out',
                        }}>
                            <button
                                onClick={() => { isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true) }}
                            >
                                <IoMdClose style={{ width: '30px', height: '30px', marginRight: '' }} />
                            </button>
                        </li>
                    </ul>
                </nav>
                {title && title.map((item: MenuFrom, index: any) => (
                    <a key={index} style={{
                        padding: '1.5rem 3rem',
                        marginRight: '3rem',
                        color: currentPage === item.MenuUrl ? '#6F7C24' : 'white',

                    }}
                    >
                        <Link href={`/YouBike/${item.MenuUrl}`}>

                            {item.titleText}

                        </Link>
                    </a>
                ))}
                <button
                    style={{
                        backgroundColor: 'white',
                        color: '#6F7C24',
                        marginTop: '3rem',
                        width: '6rem',
                        padding: '0.5rem 1.5rem',
                        marginLeft: '3rem',
                        borderRadius: '10rem',
                        cursor: 'pointer',
                        border: 'none',
                        transition: 'background-color 0.3s ease-in-out',
                    }}

                >
                    登入
                </button>
            </div>
        </div>
    )
}

export default MobileMenu