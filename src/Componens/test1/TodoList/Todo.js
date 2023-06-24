export default function Todo(props){
    const clickHandeler = (todoId)=>{
        props.myFunc(todoId)
    }

    const deleteHAndeler = (todoId)=>{
        props.deleteFunc(todoId)
    }
    return(
        <div className={`todo ${props.complited === true?"completed":""}`} style={{ display: 'flex' }}>
            <li className="todo-item">{props.title}</li>

            <button onClick={()=>clickHandeler(props.id)} className="check-btn">
                <i className="fas fa-check" aria-hidden="true">Change</i>
            </button>

            <button onClick={()=>{deleteHAndeler(props.id)}} className="trash-btn">
                <i className="fas fa-trash" aria-hidden="true">Remove</i>
            </button>
        </div>
    )
}