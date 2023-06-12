const Task = (props) => {
    
    return (
    <div onClick={props.deleteItem}>
    
      <h1> my task for today is {props.task} and i want to finish it by (24hr notation) {props.time} </h1>
    </div>
    )
      
  }

  export default Task
