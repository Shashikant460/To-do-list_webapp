import React, { useState } from "react";
//import Need from "./items"

//const itemList=[];

// function createItems(item){
//   return(
//     <Need
//       myItem={item}
//     />
//   )
// }

function App() {
  const [work, setWork] = useState("");
  const [itemList, setItemList] = useState([]);

  function enterItem(event) {
    setWork(event.target.value);
    //itemList=[...work]
  }

  function addWork() {
    setItemList(prevItems => {
      return [...prevItems, work];
    });
    setWork("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={enterItem} value={work} type="text" />
        <button onClick={addWork}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {itemList.map(toDoItem => (
          <li>{toDoItem}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
