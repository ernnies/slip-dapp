"use client";
import { useState, useEffect } from "react";

export function AvatarUpload() {
  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    if (file) console.log("File uploaded:", file.name);
  }, [file]);
  return <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="input-field" />;
}