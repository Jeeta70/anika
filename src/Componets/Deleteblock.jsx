import React, { useEffect, useState } from "react";

const Deleteblock = ({ deleteFruitList,handleRestoreCheckBox }) => {
  const [list, setlist] = useState([]);
  useEffect(() => {
    deleteFruitList.forEach((i) => {
      if(!list.includes(i.item)){
        list.push(i.item)
        setlist([...list])
      }
    });
  }, [deleteFruitList]);
  return (
    <div className="container p-3 d-flex mt-5">
      <div
        className="block_one p-1"
        style={{ width: "auto", border: "2px solid grey", listStyle: "none" }}
      >
        <h4>Delete block</h4> <hr />
        {/* {deleteFruitList &
          deleteFruitList.map((i) =>
            i?.fruits.forEach((j) => (
              <li style={{ listStyle: "none" }}>
                {console.log("j=>", j)}
                <input
                  type="checkbox"
                  name={j}
                  value={j}
                  // onClick={(e) => checkFun(e)}
                />
                &nbsp;{j}&nbsp;&nbsp;&nbsp;
              </li>
            ))
          )} */}
        {list.map((i,index) => (
          <li style={{ listStyle: "none" }} key={index}>
            <input
              type="checkbox"
              name={i}
              value={i}
              onClick={(e) => handleRestoreCheckBox(e)}
            />
            &nbsp;{i}&nbsp;&nbsp;&nbsp;
          </li>
        ))}
      </div>
    </div>
  );
};

export default Deleteblock;
