"use client";
import { useState } from "react";

export function MultiFactor() {
  const [code, setCode] = useState('');
  return (
    <input
      type="text"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Enter MFA Code"
      className="input-field"
    />
  );
}