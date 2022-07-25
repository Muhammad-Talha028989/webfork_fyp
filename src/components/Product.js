import React, { useState } from 'react'
import "../styles/Menu.css"
import Menu from '../data/ProductAPI';
import MenuCard from './MenuCard';

const Product = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) =>{
        const updatedList = Menu.filter((curElem) =>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };
  return (
    <div id="Categories">
    <nav className="navbar-filter">
        <div className="btn-group">
            <button className="btn-group__item" onClick={()=> filterItem("Gym")}>Gym</button>
            <button className="btn-group__item" onClick={()=> filterItem("Ecommerce")}>Ecommerce</button>
            <button className="btn-group__item" onClick={()=> filterItem("Restaurant")}>Restaurant</button>
            <button className="btn-group__item" onClick={()=> filterItem("Construction")}>Construction</button>
            <button className="btn-group__item" onClick={()=> filterItem("Charity")}>Charity</button>
            <button className="btn-group__item" onClick={()=> setMenuData(Menu)} >All</button>
        </div>
    </nav>
    <MenuCard menuData={menuData} />                 
    </div>
  )
}

export default Product