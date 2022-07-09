import { useRef, useContext } from 'react';
import classes from "./NewTodo.module.css";
import TodosContext from '../store/todos-context';

const NewTodo: React.FC = () => {
  
const todosCtx = useContext(TodosContext)


      //html input element does not have a value at 
    //beginning so set it
    //to null
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();



//  question mark signals to typescript to try and access the value and 
//if it succeeds the entered value is stored into todoText.
// use an exclamation mark instead of question mark if you are sure that
//that value will never be null at that spot
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

   todosCtx.addTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
