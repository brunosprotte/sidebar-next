import React from 'react';

import {
    MdHome,
    MdAccountCircle,
    MdAttachMoney,
    MdAssignment
}  from 'react-icons/md';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <MdHome />,
        cName: 'nav-text'
    },
    {
        title: 'Perfil',
        path: '/profile',
        icon: <MdAccountCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Financeiro',
        path: '/financial',
        icon: <MdAttachMoney />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <MdAssignment />,
        cName: 'nav-text'
    },
    
]