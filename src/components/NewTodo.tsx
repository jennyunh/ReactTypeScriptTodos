import { useRef } from 'react';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
  
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

    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
