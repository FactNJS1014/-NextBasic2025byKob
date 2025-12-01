"use client";

import { useState } from "react";

export default function DropdownList() {
  const [selectedLanguage, setSelectedLanguage] = useState([
    { name: "java" },
    { name: "javascript" },
    { name: "python" },
    { name: "nextjs" },
    { name: "react" },
  ]);

  const [language, setLanguage] = useState("java");
  const handleLanguageChange = (e: any) => {
    setLanguage(e.target.value);
  };
  return (
    <div>
      <select onChange={handleLanguageChange}>
        {selectedLanguage.map((language) => (
          <option key={language.name} value={language.name}>
            {language.name}
          </option>
        ))}
      </select>
      <div>
        <p>Selected Language: {language}</p>
      </div>
    </div>
  );
}
