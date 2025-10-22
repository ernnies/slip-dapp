"use client";
import { useForm } from "react-hook-form";

interface VaultFormData {
  strategy: string;
}

export function VaultForm() {
  const { register, handleSubmit } = useForm<VaultFormData>();
  const onSubmit = (data: VaultFormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card mt-4">
      <input
        {...register("strategy")}
        className="input-field w-full mt-2"
        placeholder="Yield Strategy"
      />
      <button type="submit" className="btn-primary mt-4 w-full">
        Create Vault
      </button>
    </form>
  );
}