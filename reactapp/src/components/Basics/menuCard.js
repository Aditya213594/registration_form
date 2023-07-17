import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((currEle) => {
        return (
          <>
            <div className="card-container" key={currEle.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{currEle.id}</span>
                  <span className="card-author subtle">{currEle.category}</span>
                  <h2 className="card-title">{currEle.name}</h2>
                  <span className="card-description subtle">
                    {currEle.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img
                  src={currEle.image}
                  alt="this is an image"
                />
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
