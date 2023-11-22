import { useState } from "react";
export const SumarRestar = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  const handleInput2 = (e) => setInput2(e.target.value);
  const sumar = () => {
    setResult(parseFloat(input) + parseFloat(input2));
  };
  const restar = () => {
    setResult(parseFloat(input) - parseFloat(input2));
  };
  const multiplicar = () => {
    setResult(parseFloat(input) * parseFloat(input2));
  };
  const dividir = () => {
    setResult(parseFloat(input) / parseFloat(input2));
  };
  return (
    <>
      <div>
        numero 1
        <input type="text" onChange={handleInput} value={input} />
      </div>
      <div>
        numero 2
        <input type="text" onChange={handleInput2} value={input2} />
      </div>
      <div className="operation">
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>x</button>
        <button onClick={dividir}>÷</button>
      </div>
      <nav>{result}</nav>
    </>
  );
};
