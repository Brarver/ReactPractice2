import React from "react";

function List(props) {
  return (
    <div>

    <ul className="list-group">
    {props.groceries.map(grocery => {
      return <li key={grocery.id}>{grocery.name}</li>
    })}
    </ul>
    <h1>Purchased Groceries</h1>
    {props.groceries.filter(grocery => {
      return <li key={grocery.id}> {grocery.purchased === true} </li>
    })}
    
    
    
    </div>
    
    
    
  );
}

export default List;
