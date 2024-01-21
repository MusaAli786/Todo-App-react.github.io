import { useState } from "react";

function AddTodo({ onNewItem }) {
  
    const [todoName, setTodoName] = useState();
    const [dueDate, setDueDate] = useState();

    const handleNameChange = (event) =>{
      setTodoName(event.target.value);

    };
    const handleDateChange = (event) =>{
      setDueDate(event.target.value);

    };

    const handleAddButtonClicked = () => {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }

    return (
    <div class="container text-center">
    <div class="row">
      <div class="col-4">
        <input type='text' className="inputText" placeholder='inter todo here' value={todoName} onChange={handleNameChange}/>
      </div>
      <div class="col-4">
      <input type='date' className="inputDate" value={dueDate} onChange={handleDateChange}/>
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-success add-btn" onClick={handleAddButtonClicked}>
        Add
        </button>
      </div>
    </div>
  </div>
  );
}

export default AddTodo;