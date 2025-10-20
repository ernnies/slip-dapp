"use client";
import toast from 'react-hot-toast';

export function Notification({ message }: { message: string }) {
  toast.success(message);
  return null;
}