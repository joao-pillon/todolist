import { useState } from "react";
import "./styles.css";

const Form = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  function handleClick(x) {
    addTodo(x);

  }


  return (
    <form>
      <input
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />

      <button type="button" onClick={() => handleClick(userInput)}>
        Enviar
      </button>
    </form>
  );
};

export default Form;
