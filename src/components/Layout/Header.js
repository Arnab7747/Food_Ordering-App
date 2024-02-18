import React from 'react'
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'
const imageUrl = 'https://img.freepik.com/free-photo/handrawn-barbecue-elements_125540-588.jpg?w=900&t=st=1708069945~exp=1708070545~hmac=8a927847450366695a702c8a2669639f0227301e81ea0c16a4ee683822f58fb7';

export default function Header() {
  return (
    <div>
         <React.Fragment>
            <header className={classes.header}>
                <h1>Quick Meal</h1>
                <HeaderCartButton/>

            </header>
            <div className={classes.mainImage}>
                <img src={imageUrl} alt='img'/>

            </div>
         </React.Fragment>
      
    </div>
  )
}
