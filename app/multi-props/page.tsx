"use client";

interface UserProfiles {
  name: string;
  age: number;
  email: string;
  isAdmin: boolean;
}

export default function Header({ name, age, email, isAdmin }: UserProfiles) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Role: {isAdmin ? "Admin" : "User"}</p>
    </div>
  );
}
