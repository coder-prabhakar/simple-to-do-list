import './App.css';
import SearchBar from './component/SearchBar';
import ListPresent from './component/ListPresent';
import { useState } from 'react';
import React from "react";
import uuid from "react-uuid";

function App() {

  const [data, setData] = useState([]);

  function createList(value){
    setData((prev) => [...prev,value]);
  }

  function deleteItem(value){
    const updateList = data.filter((item) => item !== value)
    setData(updateList);
  }

  //edit and update
  function editList(text,index){
    var allEditBtn = document.querySelectorAll(".editBtn");
    var inputId = uuid();
    const newArray = [...data];
    if(allEditBtn[index].classList.contains("fa-pencil")){
      newArray[index] = <input type="text" id={inputId}/>;
      setData(newArray)
      setTimeout(()=>{
        const inputEle = document.getElementById(inputId);
        inputEle.value = text;
      },50)
      allEditBtn[index].classList.remove("fa-pencil");
      allEditBtn[index].textContent = "save";
      allEditBtn[index].style.fontSize = "14px";
    } else if(allEditBtn[index].textContent === "save"){
      allEditBtn[index].textContent = "";
      allEditBtn[index].style.fontSize = "20px";
      allEditBtn[index].classList.add("fa-pencil");
      const everyList = document.querySelectorAll("fieldset");
      let inputContent = everyList[index].children[1].value;
      newArray[index] = <p>{inputContent}</p>;
      setData(newArray)
    }    
  }
  
  return (
    <div className="App">
      <SearchBar createList={createList}/>
      <ListPresent data={data} deleteItem={deleteItem} editList={editList}/>
    </div>
  );
}

export default App;