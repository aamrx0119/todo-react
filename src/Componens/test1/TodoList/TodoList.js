import { useState } from "react"
import Header from "./Header"
import Todo from "./Todo"
export default function TodoList(){
    const [inputTitle,inputTitleState] = useState('')
    const [todos,addTodoState] = useState([])
    const [status,filterTodo] = useState('all')

    const submitHandeler =((e)=>{
        e.preventDefault()
    })

    const inputHandeler=(e)=>{
        inputTitleState(e.target.value)
    }
    
    const addTodo = ()=>{
        let newTodo = {
            id:todos.length+1,
            title:inputTitle,
            complited:false,
        }
        
        addTodoState([...todos,newTodo])
        inputTitleState('')
    
    }

    const updateHandeler = (todoId=>{
        let updateTodo = [...todos]

        updateTodo.forEach(element => {
            if(element.id === todoId){
                element.complited = !element.complited
            }
            
        });

        addTodoState(updateTodo)
    })
    const deleteHandeler = (todoId=>{
        let todoFilter = todos.filter(todo=>{
            return todo.id !=todoId
        })
        addTodoState(todoFilter)
    })

    const selectHandeler = (e=>{
        filterTodo(e.target.value)
    })

    return(
        <>
        <Header />
        <form onSubmit={submitHandeler}>
            <input onChange={inputHandeler} type="text" value={inputTitle} className="todo-input" maxLength="40"/>
            <button onClick={addTodo} className="todo-button" type="submit">
                <i className="fas fa-plus-square">Add</i>
            </button>
            <div className="select">
                <select onChange={selectHandeler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

        <div className="todo-container">
            <ul className="todo-list">
                {status=='all'&&
                    todos.map((todo)=>{
                        return <Todo key={todo.id} deleteFunc={deleteHandeler} myFunc={updateHandeler} {...todo} ></Todo>

                    }

                )}
                {status=='completed'&&(
                    todos.filter(todo=>{
                        return todo.complited===true
                    }).map(todo=>{
                        return <Todo key={todo.id} deleteFunc={deleteHandeler} myFunc={updateHandeler} {...todo} ></Todo>
                    })
                )}
                {status=='uncompleted'&&(
                    todos.filter(todo=>{
                        return todo.complited===false
                    }).map(todo=>{
                        return <Todo key={todo.id} deleteFunc={deleteHandeler} myFunc={updateHandeler} {...todo} ></Todo>
                    })
                )}

                
                
                
             
            </ul>
        </div>
    </>
    )
}