import React from "react";
import './CardList.css';

const CardList = ({list = []}) => {

    const listItems = list.map((item, i) =>
    <div className="content" key={item.toString() + i}>
      {item.name_product_category}
      {item.Cantidad}
    </div>
  );
  return (
    <>
    <h3>Categorias</h3>
    <ul>{listItems}</ul>
    </>

  );
}

export default CardList;