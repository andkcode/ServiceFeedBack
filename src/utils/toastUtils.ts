import { toast } from "react-toastify";
import { CustomToast } from "../components/CustomToast";

export const notify = (type: "success" | "error" | "info" | "warning", title: string, description?: string) => {
  toast(({ closeToast }) => (
    <CustomToast type={type}
    title={title}
    description={description}
    closeToast={closeToast} />
  ), {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    hideProgressBar: false,
  });
};