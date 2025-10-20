"use client";
import { useForm } from "react-hook-form";  // Assume installed

export function VaultForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('strategy')} className="input-field" />
      <button type="submit" className="btn-primary">Create Vault</button>
    </form>
  );
}