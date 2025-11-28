"use client";

import { useState } from "react";

export default function Checkbox() {
  const [javaChecked, setJavaChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);
  const [pythonChecked, setPythonChecked] = useState(false);

  const handleJavaChange = (e: any) => {
    setJavaChecked(e.target.checked);
  };
  const handleJsChange = (e: any) => {
    setJsChecked(e.target.checked);
  };
  const handlePythonChange = (e: any) => {
    setPythonChecked(e.target.checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={javaChecked}
        onChange={handleJavaChange}
      />{" "}
      JAVA
      <input
        type="checkbox"
        checked={jsChecked}
        onChange={handleJsChange}
      />{" "}
      JAVASCRIPT
      <input
        type="checkbox"
        checked={pythonChecked}
        onChange={handlePythonChange}
      />{" "}
      PYTHON
      <div>
        <p>Java Checked: {javaChecked.toString()}</p>
        <p>JavaScript Checked: {jsChecked.toString()}</p>
        <p>Python Checked: {pythonChecked.toString()}</p>
      </div>
    </div>
  );
}
