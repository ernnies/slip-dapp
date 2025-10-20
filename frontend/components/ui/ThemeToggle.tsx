"use client";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}