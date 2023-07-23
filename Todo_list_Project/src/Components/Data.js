import React from 'react'
import '../CSS/todo.css'

const Data = (props) => {

  return(
    <>
        <div className='todo_style'>
            <i className="fa fa-times" arial-hidden="true"
             onClick={()=>{
                props.onSelect(props.id) // it will show the item clicked
             }}
            />
            <li> {props.text} </li>
        </div>
        
    </>
    

  ) 
}
export default Data