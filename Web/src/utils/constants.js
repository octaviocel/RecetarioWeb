import { toast } from "react-toastify";

export const MILI_IN_DAY = 1000 * 3600 * 24;
export const MILI_IN_HOUR = 60 * 60 * 1000;

export const baseURL = import.meta.env.VITE_API;

export const alert = (variant, message) => {
  const configuration = {
    position: "top-right",
    autoClose: 1000,
    theme: "light",
  };
  variant === "success"
    ? toast.success(message, configuration)
    : toast.error(message, configuration);
};
