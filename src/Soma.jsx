import { useState } from "react";

export default function Soma() {
  const [numero, setNumero] = useState(0);
  const numeral = Number(numero);

  return (
    <>
      <label>
        <p>{numero}</p>
      </label>
      <button onClick={(e) => setNumero(numeral + 10)}>+10</button>
    </>
  );
}
