function TodoItem({todoName, todoDate, onDeleteClick}){
    
    return(
        <div class="container">
  <div class="row">
    <div class="col-4">
      {todoName}
    </div>
    <div class="col-4">
    {todoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger delete-btn1" onClick={() => onDeleteClick(todoName)}>Delete</button>
    </div>
  </div>
</div>

    );
}
export default TodoItem;