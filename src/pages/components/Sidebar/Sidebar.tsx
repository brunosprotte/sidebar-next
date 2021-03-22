import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';
import { Container } from '@/styles/pages/components/Sidebar';

export default function Sidebar() {

    return (
        <Container>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
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