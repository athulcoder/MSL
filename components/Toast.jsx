"use client";

import { useEffect } from "react";

export default function Toast({ type, message, onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-xl text-white font-semibold transition-all
        ${
          type === "success"
            ? "bg-emerald-600"
            : "bg-rose-600"
        }`}
    >
      {message}
    </div>
  );
}
