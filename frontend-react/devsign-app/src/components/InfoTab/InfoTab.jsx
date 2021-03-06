import React from "react";
import './InfoTab.css';

const InfoTab = (props) => {

  return (
    <>
      <div className="panel-container">
        <h3>{props.title}</h3>
        <p>{props.total}</p>
        <p>{props.name}</p>
        <p>{props.lastName}</p>
        <p>{props.user}</p>
        <p>{props.email}</p>
        <p>{props.description}</p>
        <p>{props.color}</p>
        <p>{props.category}</p>
        <p>{props.price}</p>
      </div>

    </>
  )
}

export default InfoTab;