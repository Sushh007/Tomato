import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png';

const Header = () => {
    return(
    <div className='header' style={{ backgroundImage: `url(${headerImg})`, backgroundRepeat: 'no-repeat' }}>
        <div className='header-contents' >
            <h2>Order your favourite food here</h2>
            <p>Choose form a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experinece, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}
 

export default Header;