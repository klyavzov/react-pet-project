import React, {FC} from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import style from './css/navbar.module.css';

type NavbarProps = {
    isMobileMenu: boolean
    isDesktopMenu: boolean
}

const Navbar:FC<NavbarProps> = ({isMobileMenu, isDesktopMenu}) => {

  const navClassName = !isDesktopMenu ? classNames(style.mobileNav, {[style.mobileNavActive] : isMobileMenu}) : style.nav;
  const linkClassName = !isDesktopMenu ? style.mobileLink : style.link;

  return (
    <nav className={navClassName}>
      <NavLink className={({ isActive }) => isActive ? classNames(linkClassName, style.activeLink) : linkClassName} to='/'>Главная</NavLink>
      <NavLink className={({ isActive }) => isActive ? classNames(linkClassName, style.activeLink) : linkClassName} to='/catalog'>Каталог продукции</NavLink>
      <NavLink className={({ isActive }) => isActive ? classNames(linkClassName, style.activeLink) : linkClassName} to='/programs'>Подбор программы</NavLink>
    </nav>
  );
};

export default Navbar;