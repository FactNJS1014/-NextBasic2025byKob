export default function ServerComponent() {
  const items = [
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
  ];
  return (
    <div>
      <h1>Server Component</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
