import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';

const mealsImage = 'https://plus.unsplash.com/premium_photo-1677955071851-e6783ab1d1cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Foodies Net</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' style={{ width: '100%', height: '100%' }} />
      </div>
    </Fragment>
  );
};

export default Header;
