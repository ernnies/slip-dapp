"use client";
import { useState } from "react";
import toast from 'react-hot-toast';

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const addNotification = (msg: string) => {
    toast(msg);
    setNotifications([...notifications, msg]);
  };
  return { notifications, addNotification };
}