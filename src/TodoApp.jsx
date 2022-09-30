import { useGetTodoByIdQuery, useGetTodosQuery } from "./store/apis/todosApi"
import { useState } from "react"

const TodoApp = () => {
    const [todoId, setTodoId] = useState(1)
    //const { data : todos = [], isLoading } = useGetTodosQuery();
    const { data: todo, isLoading} = useGetTodoByIdQuery(todoId)

    const nextTodo = () => {
        setTodoId(todoId + 1)
    }

    const prevTodo = () => {
        if(todoId === 1) return
        setTodoId(todoId - 1)
    }

    return (
        <>
        <h1>Todos - RTK Query</h1>
        <p>Loading : {isLoading ? 'true' : 'false'}</p>
        <pre>{JSON.stringify(todo)}</pre>
        <button onClick={prevTodo }> prev Todo</button>
        <button onClick={nextTodo}> next Todo</button>
        {/* <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <strong> {todo.completed ? 'Done' : 'Pending'} </strong>
                    {todo.title}
                </li>
            ))}
        </ul> */}
        </>
    )
}

export default TodoApp