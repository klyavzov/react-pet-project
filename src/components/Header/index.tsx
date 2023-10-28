import React, {FC, useCallback, useState} from 'react';
import style from './css/header.module.css';
import useResize from '../../hooks/useResize';
import Navbar from '../Navbar';
import BurgerMenu from '../BurgerMenu';

const Header:FC = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMobileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    isMenuOpen ? setMenuOpen(false) : setMenuOpen(true);
  }, [isMenuOpen]);

  const {isScreenSm} = useResize();
  const logoImage = isScreenSm ? '/static/icons/logo-desktop.svg' : '/static/icons/logo-mobile.svg';

  return(
    <header className={style.header}>
      <a className={style.logoHref} href='/'>
        <img className={style.logo} src={logoImage} alt='logo'/>
      </a>
      {!isScreenSm && <div className={style.logoText}>Cat energy</div>}
      <Navbar isMobileMenu={isMenuOpen} isDesktopMenu={isScreenSm}/>
      <BurgerMenu handleMobileMenuOpen={handleMobileMenuOpen} isMenuOpen={isMenuOpen}/>
    </header>
  );
};

export default Header;