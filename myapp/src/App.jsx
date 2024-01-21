import AppName from "./components/appName";
import AddTodo from"./components/AddTodo";
import TodoItems from "./components/TodoItems";
import './App.css'
import { useState } from "react";
import WellcomMessage from "./components/WellcomMessage"


function App() {

 const [todoItems, setTodoItems] = useState([]);

 const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [...todoItems,
       {name : itemName, dueDate : itemDueDate},
      ];
      setTodoItems(newTodoItems);
 };

 const handleDeleteItem = (todoItemName) => {
 const newTodoItems =todoItems.filter(item => item.name !== todoItemName);
 setTodoItems(newTodoItems);
  console.log(`item deleted ${todoItemName}`)

 }

  return (
    <div className="App">
     <AppName />
     <AddTodo onNewItem={handleNewItem} />
    { todoItems.length === 0 && <WellcomMessage />}
     <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
    
  
</div>
  );
}

export default App;
