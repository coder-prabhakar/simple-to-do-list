function SearchBar({createList}){

    let inputData = "";
    function handleChange(event){
        inputData = event.target.value;
    }

    function setData(){
        if(inputData !== ""){
            createList(<p>{inputData}</p>);
        }
        const inputBox = document.querySelector(".inputBox")
        inputBox.value = "";
    }

    return (
        <div className="searchBox">
            <input type="text" className="inputBox" onChange={handleChange}/>
            <i class="fa-solid fa-plus" onClick={setData}></i>
        </div>
    );
}

export default SearchBar;