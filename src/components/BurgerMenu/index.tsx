import React, {FC} from 'react';
import classNames from 'classnames';
import style from './css/burgerMenu.module.css';

type BurgerProps = {
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void
    isMenuOpen: boolean
}

const BurgerMenu:FC<BurgerProps> = ({handleMobileMenuOpen, isMenuOpen}) => {

  const burgerLineClassName = classNames(style.burgerLine, {[style.burgerLinesAnimation] : isMenuOpen});

  return (
    <>
      <div className={style.burgerMenu} onClick={handleMobileMenuOpen}>
        <div className={burgerLineClassName} />
        <div className={burgerLineClassName} />
        <div className={burgerLineClassName} />
      </div>
    </>
  );
};

export default BurgerMenu;