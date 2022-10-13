import Task from "./Task"

const ItemList=({tasks,handleDoubleClick,handleDelete})=>{
    return (
        <div className='items-list'>
        {tasks.map((task)=><Task  key={task.id} task={task} 
        handleDoubleClick={handleDoubleClick} handleDelete={handleDelete}/>)
         }
        </div>
    );
};

export default ItemList