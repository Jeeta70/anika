import React, { useState } from "react";
import Block from "./Block";
import Button from "./Button";
import Deleteblock from "./Deleteblock";
const Sectionone = () => {
  let checkedItem = [];

  let myList = [
    {
      block: "Block A",
      fruits: ["Apple", "Banana", "Orange", "Mango"],
    },
    { block: "Block B", fruits: [] },
    { block: "Block C", fruits: [] },
    { block: "Block D", fruits: [] },
  ];
  const [list, setList] = useState(myList);
  const [deleteFruitList, setDeleteFruits] = useState([]);
  const [restoreFruits, setRestoreFruits] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(false);
  // const [checkedItem, setcheckedItem] = useState([])
  const [radio, setradio] = useState("")
  // console.log(list);
  console.log(checkedItem);
  console.log(radio);
  const AddBlock = () => {
    if (list.length === 4) {
      setList([...list, { block: "Block E", fruits: [] }]);
    } else if (list.length === 5) {
      setList([...list, { block: "Block F", fruits: [] }]);
    } else if (list.length === 6) {
      setList([...list, { block: "Block G", fruits: [] }]);
    }
  };

  const handleCheckItem = (e) => {
    const checkValue = e.target.value;
    const checkBoolean = e.target.checked;
    // console.log(checkedItem, "-----tttt----")
    if (checkBoolean) {
      checkedItem.push(checkValue);
    } else {
      const index = checkedItem.indexOf(checkValue);
      checkedItem.splice(index, 1);
    }
  };

  const handleRestoreCheckItem = (e) => {
    if (e.target.checked) {
      restoreFruits.push(e.target.value);
      setRestoreFruits([...restoreFruits]);
    } else {
      const index = checkedItem.indexOf(restoreFruits);
      restoreFruits.splice(index, 1);
      setRestoreFruits([...restoreFruits]);
    }
  };
  const handleForwardBtn = () => {
    //Previous code
    // checkedItem.forEach((item) => {
    //   let moveFromIndex = -1;
    //   list.forEach((x, index) => {
    //     const index1 = x.fruits.indexOf(item);
    //     console.log("index", index1);
    //     if (index1 !== -1) {
    //       x.fruits.splice(index1, 1);
    //       moveFromIndex = index;
    //     }
    //   });
    //   debugger;
    //   if (moveFromIndex !== -1) {
    //     list[++moveFromIndex].fruits.push(item);
    //     setList([...list]);
    //     debugger;
    //   }
    // });

    // checkedItem = [];

    console.log(checkedItem)
    console.log(radio);
  };

  const handleBackwordBtn = () => {
    checkedItem.forEach((item) => {
      let moveFromIndex = -1;
      // console.log(checkedItem, "0-----test---");
      list.forEach((x, index) => {
        const index1 = x.fruits.indexOf(item);
        if (index1 !== -1) {
          x.fruits.splice(index1, 1);
          moveFromIndex = index;
        }
      });
      if (moveFromIndex !== -1) {
        list[--moveFromIndex].fruits.push(item);
        setList([...list]);
      }
    });

    checkedItem = [];
  };

  const handleRemoveButton = () => {
    checkedItem.forEach((item) => {
      list.forEach((x) => {
        const index1 = x.fruits.indexOf(item);
        if (index1 !== -1) {
          x.fruits.splice(index1, 1);
          deleteFruitList.push({
            block: x.block,
            item,
          });
        }
      });
    });
    setDeleteFruits([...deleteFruitList]);
    setList(list);
  };

  const handleRestoreBtn = () => {
    // console.log(deleteFruitList);
    // console.log(list);
    // console.log(restoreFruits)

    const manageFruits = [];
    debugger;
    restoreFruits.forEach((restoreFruit) => {
      debugger;
      deleteFruitList.forEach((deleteFruit, index) => {
        debugger;
        if (restoreFruit === deleteFruit.item) {
          manageFruits.push(deleteFruit);
          debugger;
          deleteFruitList.splice(index, 1);
          debugger;
        }
      });
    });

    setRestoreFruits([]);

    console.log(deleteFruitList);
    // console.log(manageFruits);
    // console.log(list);

    manageFruits.forEach((manageFruits) => {
      const blockName = manageFruits.block;
      debugger;
      const item = manageFruits.item;
      list.forEach((i, index) => {
        const blockName1 = i.block;
        if (blockName === blockName1) {
          list[index].fruits.push(item);
        }
      });
    });

    setDeleteFruits([...deleteFruitList]);
    console.log(deleteFruitList);
    console.log(list);
  };

  const handleDisbleButton = () => {
    if (list.at(-1).fruits.length >= 4) {
      return true;
    }
  };

  const handleRadio = (e)=>{
    setradio(e.target.value)
  }

  
  const handleCheckBox = (e) => {
    // let checkboxes = e.target.checked;
    // for (let i = 0; i < checkboxes.length; i++) {
    // }
    // let checkBlock=e.target.checked;
  };
  return (
    <>
      <div className="container d-flex justify-content-center">
        {list.map((item) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Block
                key={item.fruits}
                block={item.block}
                checkbox={item.fruits}
                checkFun={handleCheckItem}
                handleRadio={handleRadio}
              />
            </div>
          );
        })}

        {deleteFruitList.length > 0 ? (
          <Deleteblock
            key={deleteFruitList}
            deleteFruitList={deleteFruitList}
            handleRestoreCheckBox={handleRestoreCheckItem}
          />
        ) : (
          ""
        )}
      </div>
      <div className="d-flex justify-content-center m-2">
        {list.length <= 6 ? (
          <Button
            onClick={() => {
              AddBlock();
            }}
            title="Add More"
          />
        ) : (
          ""
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Button onClick={handleBackwordBtn} title="Back" />
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={handleForwardBtn}
          title="Forward"
          disableButton={handleDisbleButton}
        />
        &nbsp;&nbsp;&nbsp;
        <Button onClick={handleRemoveButton} title="Remove" />
        &nbsp;&nbsp;&nbsp;
        <Button onClick={handleRestoreBtn} title="Restore" />
        &nbsp;
      </div>
    </>
  );
};

export default Sectionone;
