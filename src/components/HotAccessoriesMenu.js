import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'



const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu' id='HotAccessoriesMenu'>
        <Link className="HotAccessoriesMenuLink" to="/gymTemplate">Gym Template</Link>
        <Link className="HotAccessoriesMenuLink" to="/smartDevice">Ecommerce</Link>
        <Link className="HotAccessoriesMenuLink" to="/home">Restaurant</Link>
        <Link className="HotAccessoriesMenuLink" to="/lifestyle">Construction</Link>
        <Link className="HotAccessoriesMenuLink" to="/mobileAccessories">Charity</Link>


    </div>
  )
}

export default HotAccessoriesMenu