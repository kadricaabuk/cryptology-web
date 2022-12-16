import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({label, href}) => {
    return (
        <div className='h-[30px] px-3 flex justify-center items-center font-medium rounded-md hover:bg-gray-200 hover:text-gray-900 '>
            <Link to={href}>{label}</Link>
        </div>
    );
}

export default NavbarItem;
