import './App.css';
import SearchBar from './component/SearchBar';
import ListPresent from './component/ListPresent';
import { useState } from 'react';
import React from "react";
import uuid from "react-uuid";

function App() {

  const [data, setData] = useState([]);

  function createList(value){
    setData((prev) => [...prev,{
      userInput:value,
      editClassname:'editBtn fa-solid fa-pencil',
      saveText: null
    }]);
  }

  function deleteItem(value){
    const updateList = data.filter((item) => item !== value)
    setData(updateList);
  }

  //edit and update
  function editList(index){
    const newArray = [...data];

    if(data[index].editClassname === 'editBtn fa-solid fa-pencil'){
      newArray[index] = {
        userInput: <input type='text'/>,
        editClassname:'editBtn saveBtn',
        saveText: 'SAVE'
      }
      var currentText = data[index].userInput.props.children;
      setTimeout(()=>{
        const inputEle = document.querySelector('.ListItemContainer').children[index].children[1];
        inputEle.value = currentText;
      },50)
    } else {
      newArray[index] = {
        userInput: <p>{document.querySelector('.ListItemContainer').children[index].children[1].value}</p>,
        editClassname:'editBtn fa-solid fa-pencil',
        saveText: ''
      }
    }

    setData(newArray)
  }
  
  return (
    <div className="App">
      <SearchBar createList={createList}/>
      <ListPresent data={data} deleteItem={deleteItem} editList={editList}/>
    </div>
  );
}

export default App;