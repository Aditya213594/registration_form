import React, { useState } from "react";
import "./style.css";
import menu from "./menuApi.js";
import MenuCard from "./menuCard.js";

const Restaurant = () => {
  const [menuData, setMenuData] = useState(menu);

  const filterItem = (category) => {
        const newList = menu.filter((curr)=>{
            return curr.category === category;
        })

        setMenuData(newList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn_group">
          <button className="btn-group__item" onClick={()=>filterItem("Breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filterItem("Lunch")}>Lunch</button>
          <button className="btn-group__item" onClick={()=>filterItem("Evening")}>Evening</button>
          <button className="btn-group__item" onClick={()=>setMenuData(menu)}>All</button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
