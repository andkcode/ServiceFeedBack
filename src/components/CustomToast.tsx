import { X } from "lucide-react";
import React from "react";

interface CustomToastProps {
  closeToast?: () => void;
  type?: "success" | "error" | "info" | "warning";
  title: string;
  description?: string;
}

const typeStyles = {
  success: "bg-emerald-600",
  error: "bg-red-600",
  info: "bg-blue-600",
  warning: "bg-yellow-600 text-black",
};

export const CustomToast: React.FC<CustomToastProps> = ({ closeToast, type = "info", title, description }) => {
  return (
    <div
      className={`rounded-lg shadow-lg px-4 py-3 w-full max-w-sm flex flex-col gap-1 text-white ${typeStyles[type]}`}
    >
      <div className="flex justify-between items-center">
        <strong className="text-md">{title}</strong>
        <button onClick={closeToast}>
          <X className="w-4 h-4" />
        </button>
      </div>
      {description && <p className="text-sm">{description}</p>}
    </div>
  );
};
