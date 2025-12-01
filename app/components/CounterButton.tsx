"use client";

import { useContext } from "react";
import { DataContext } from "../share/page";

export default function CounterButton() {
  const { count, setCount } = useContext(DataContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
