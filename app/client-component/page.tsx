"use client";

import { useState } from "react";

export default function ClientComponent() {
  const [items] = useState([
    "java",
    "js",
    "python",
    "php",
    "c#",
    "c++",
    "c",
    "ruby",
    "go",
    "rust",
  ]);
  return (
    <div>
      <h1>Client Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
