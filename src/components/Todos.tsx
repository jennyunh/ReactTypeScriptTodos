import React from 'react';
import { useContext } from 'react';
import TodosContext from '../store/todos-context';
import classes from './Todos.module.css';
import TodoItem from './TodoItem';



//props is an object with a key named items that 
//holds an array of strings and a built in children key (for props.children)
//const Todos = (props: { items: string[], children }) => {}

//TO describe react functional components, use React.FC
//React FC is a type definition that says that Todos is a
//function that is a functional component(FC)
//React FC is a generic type
//the React.FC<{}> part lets you insert an object into the 
//base object that has the key children (props.children)

const Todos: React.FC = () => {
  
  
  const todosCtx = useContext(TodosContext)
  
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (

      
        <TodoItem removeHandler={todosCtx.removeTodo.bind(null, item.id)} key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
