import React from 'react';

import TodoItem from './TodoItem';
import Todo from '../models/todo';


//props is an object with a key named items that 
//holds an array of strings and a built in children key (for props.children)
//const Todos = (props: { items: string[], children }) => {}

//TO describe react functional components, use React.FC
//React FC is a type definition that says that Todos is a
//function that is a functional component(FC)
//React FC is a generic type
//the React.FC<{}> part lets you insert an object into the 
//base object that has the key children (props.children)

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
