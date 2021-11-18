import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListComponent = () => {
  const list = useSelector((state) => state.allList.List);
  const renderList = list.map((List) => {
    const { id, name, price, category } = List;
    return (
      <div key={id}>
          <div>
            <div>
              <div>
                <div>{name}</div>
                <div>$ {price}</div>
                <div>{category}</div>
              </div>
            </div>
          </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ListComponent;