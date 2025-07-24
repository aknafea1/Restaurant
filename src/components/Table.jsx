import React from "react";
import { table,tableItem,chef,original } from "./Table.module.css";

const Table = ({ fetchedData,style }) => {
  console.log(fetchedData);
  return (
    <div className={table} style={{...style}}>
      {fetchedData.menu.map((cat, idx) => {
        return <div key={idx} className={tableItem}>
          <h2>{cat.category}</h2>
          {cat.items.map((item,id)=>{
            return <ul key={id} className={`${item.tag == 'Chef Recommend'?chef:''} ${item.tag == 'Original Taste'?original:''}`}>
              <li><h3>{item.name}</h3> <span>{item.price}</span></li>
              <li><p>{item.description}</p></li>
            </ul>
          })}
        </div>;
      })}
    </div>
  );
};

export default Table;
