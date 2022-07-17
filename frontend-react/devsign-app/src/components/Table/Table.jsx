import React from "react";

const Table = ({columns = [] }) => {
return (
  <>
  <table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Categoría</th>
      <th>Color</th>
      <th>Precio</th>
    </tr>
  </thead>
    <tbody>
        { columns.map((item, index) => 
        <tr key={item + index}>
          <td>{item.name}</td>
          <td>{item.name_product_category}</td>
          <td>{item.name_color}</td>
          <td>{item.price}</td> 
        </tr>
        ) }

    </tbody>
  </table>
  </>
);
}

export default Table;