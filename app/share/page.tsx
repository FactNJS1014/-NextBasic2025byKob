"use client";

import { createContext, useState } from "react";
import CounterButton from "../components/CounterButton";
import CounterDisplay from "../components/CounterDisplay";

export const DataContext = createContext<any>(undefined);

export default function Page() {
  const [count, setCount] = useState(0);
  return (
    <DataContext.Provider value={{ count, setCount }}>
      <CounterDisplay />
      <CounterButton />
    </DataContext.Provider>
  );
}
