"use client";
import { ReactNode, useState } from "react";

export function Modal({ children, trigger }: { children: ReactNode; trigger: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {children}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-moca text-white px-4 py-2 rounded-md hover:bg-slip"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}