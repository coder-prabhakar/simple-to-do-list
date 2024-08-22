export default function ListPresent({data, deleteItem, editList}){

    const todayDate = new Date();
    const showDate = `${todayDate.getDate()}-${todayDate.getMonth()}-${todayDate.getFullYear()}`

    return (
        <div className="ListItemContainer">
            {data.map((item, index) => (
                <fieldset>
                    <legend>{showDate}</legend>
                    {item.userInput}
                    <i className={item.editClassname} onClick={() => {editList(index)}}>{item.saveText}</i>
                    <i className="fa-solid fa-trash" onClick={() => { deleteItem(item)}}></i>
                </fieldset>
            ))}
        </div>
    );
}