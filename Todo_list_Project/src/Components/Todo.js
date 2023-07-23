import React, { useState } from 'react'
import '../CSS/todo.css'
import Data from './Data'

function Todo() {

    const [inputList,setInputList] = useState("") // State of Todolist user input
    
    const [Items,setItems] = useState([])// new state for Adding data onClick

    const itemEvents = (event) =>{
        setInputList(event.target.value); // any input provided by user will be set to setInputlist and the data of imputList will be changed
    }

    const addData = () =>{

        setItems((oldItems) =>{
            return [...oldItems, inputList]
        }) //onClick current data of Items array will be stored in oldItems array and using inputList the new input data will also be store in OldItems which will provide us new array.  

        setInputList('') // this will auto set inputList empty.
    }  

    const  deleteItems =(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((array,index)=>{
                return index !== id; // if index and id are matched from oldItem data then data will be deleted else returned as an array.
            })
        })
        console.log('deleted')
    }
   
  return (
    <div>
        <div className='main_div'>
            <div className='center_div'>
                <br />
                <h1>ToDo List</h1>
                <br />
                <input type="text" placeholder='Add a item' value={inputList}  onChange={itemEvents}/>
                <button onClick={addData}> + </button>

                {/* To add user input into Items array and to display it after rendering */}
                <ol>  
                    {
                        Items.map( (itemval ,index)=>{ //current val , index , this , array 
                           return(
                           
                                <Data 
                                    key = {index}
                                    id  = {index}
                                    text = {itemval}
                                    onSelect ={deleteItems}
                                /> //the value of itemval is provided from Data component.
                                 
                            
                           ) 
                        })
                    }  
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Todo


