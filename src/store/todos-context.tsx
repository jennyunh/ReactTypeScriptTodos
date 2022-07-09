import Todo from '../models/todo';
import React from 'react';
import { useState } from 'react';

type todosContextShape = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}


//describe shape of todos context.
const TodosContext = React.createContext<todosContextShape>(
{
items: [],
addTodo: () => {},
removeTodo: (id: string) => {}

}

);

export const TodosContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const removeTodoHandler = (todoId: string) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.id !== todoId);
  })
    }
  
    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);
  
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
    };
    
const contextValue: todosContextShape= {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
}


    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>

}


export default TodosContext;