"use client";

import { useContext } from "react";
import { DataContext } from "../share/page";

export default function CounterDisplay() {
  const { count } = useContext(DataContext);
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
