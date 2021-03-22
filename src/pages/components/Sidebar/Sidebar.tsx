import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import { Container } from '@/styles/pages/components/Sidebar';

export default function Sidebar() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Container>
            <div className="navbar">
                <Link href="#">
                    <a><FaBars onClick={showSidebar}/></a>
                </Link>
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link href="#">
                           <a><AiOutlineClose /></a>
                        </Link>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                               <Link href={item.path} passHref>
                                    <a>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </a>
                                </Link> 
                            </li>
                        );
                    })}

                </ul>
            </nav>
        </Container>
    );
};