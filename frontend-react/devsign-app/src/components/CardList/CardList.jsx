import React from "react";
import './CardList.css';

const CardList = ({list = []}) => {

    const listItems = list.map((item, i) =>
    <div className="content" key={item.toString() + i}>
      <p>{'Nombre: ' + item.name_product_category}</p>
      <p>{'Cantidad de productos: ' +item.Cantidad}</p>
    </div>
  );
  return (
    <>
    <ul className="list">{listItems}</ul>
    </>

  );
}

export default CardList;