"use client";

import { useState } from "react";

export default function Radiobox() {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const handleLanguageChange = (e: any) => {
    setSelectedLanguage(e.target.value);
  };
  return (
    <div>
      <input
        type="radio"
        value="java"
        checked={selectedLanguage === "java"}
        onChange={handleLanguageChange}
      />{" "}
      JAVA
      <input
        type="radio"
        value="js"
        checked={selectedLanguage === "js"}
        onChange={handleLanguageChange}
      />{" "}
      JAVASCRIPT
      <input
        type="radio"
        value="python"
        checked={selectedLanguage === "python"}
        onChange={handleLanguageChange}
      />{" "}
      PYTHON
      <div>
        <p>Selected Language: {selectedLanguage}</p>
      </div>
    </div>
  );
}
