"use client";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}
