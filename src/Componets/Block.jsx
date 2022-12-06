import React from "react";

const Block = ({ block, checkbox, checkFun, handleRadio }) => {
  return (
    <>
     
      <div className="container p-3 d-flex mt-5">
        <div
          className="block_one p-1"
          style={{ width: "auto", border: "2px solid grey", listStyle: "none" }}
        >
          <h4>{block}</h4> <hr />
          {checkbox &&
            checkbox.map((item) => {
              return (
                <li key={item} style={{ listStyle: "none" }}>
                  <input
                    type="checkbox"
                    name="veg"
                    value={item}
                    onClick={(e) => checkFun(e)}
                  />
                  &nbsp;{item}&nbsp;&nbsp;&nbsp;
                </li>
              );
            })}
        </div>
      </div>
      <input type="radio" name="radio" value={block} onChange={(e)=>{handleRadio(e)}} />
    </>
  );
};

export default Block;
