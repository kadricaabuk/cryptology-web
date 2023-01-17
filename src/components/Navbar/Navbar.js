/* This example requires Tailwind CSS v2.0+ */
import logo from "../../assets/logo-01.png";
import MenuDropdown from "./MenuDropdown";
import NavbarItem from './NavbarItem';
import { useState } from "react";

const Navbar = () => {

  const [navigation, setNavigation] = useState([
    { id: 0,  name: 'Homepage', href: '/', current: false },
    { id: 1, name: 'About', href: '/about', current: false },
  ])
  const [chipherRoutes, setChipherRoutes] = useState([
    { id: 0, name: 'Affine Chipher', href: 'affine', current: false},
    { id: 1, name: 'Ceasar Chipher', href: 'ceasar', current: false },
    { id: 2, name: 'Permutation Chipher', href: 'permutation', current: false },
    { id: 3, name: 'Substitution Chipher', href: 'substitution', current: false },
    { id: 4, name: 'Vigenere Chipher', href: 'vigenere', current: false },
  ])

  return (
    <nav className='bg-gray-800 text-white flex justify-start items-center flex-row gap-4 h-[60px]'>
      <img src={logo} alt="LOGO_MENU" className='h-[40px]'/>
      {navigation.map(tab => <NavbarItem key={tab.id} setNavigation={setNavigation} href={tab.href} label={tab.name}/>)}
      <MenuDropdown labelText={'Chiphers'} dropdownList={chipherRoutes} setDropdownList={setChipherRoutes}/>
    </nav>
  )
}

export default Navbar