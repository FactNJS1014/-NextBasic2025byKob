"use client";

import { useState } from "react";

export default function Page() {
  const [age, setAge] = useState<number>(18);
  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <div>
        <p>Age: {age}</p>
        {age >= 18 ? <p>Adult</p> : <p>Minor </p>}
      </div>
    </div>
  );
}
