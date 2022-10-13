
const Task=({task,handleDoubleClick,handleDelete})=>{
    return(
        <div className='to-do-item'>
          <span className='name' style={task.complete ? {textDecoration:"line-through"}:null} 
          onDoubleClick={()=>handleDoubleClick(task.id)}>{task.taskName}</span>
          <div className='action'>
            <span><button onClick={()=>handleDelete(task.id)}>Delete</button></span>
          </div>
        </div>)
        }

export default Task