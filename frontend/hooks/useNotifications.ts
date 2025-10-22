"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useNotifications() {
  const [notifications, setNotifications] = useState<string[]>([]); // Explicitly type as string[]

  const addNotification = (msg: string) => {
    toast(msg);
    setNotifications([...notifications, msg]);
  };

  useEffect(() => {
    if (notifications.length > 0) {
      console.log("Notifications:", notifications);
    }
  }, [notifications]);

  return { notifications, addNotification };
}