import {toast} from "react-toastify";

export const notifySuccess = (message: string) => toast.success(`✅ ${message}`);
export const notifyError = (message: string) => toast.error(`❌ ${message}`);
export const notifyInfo = (message: string) => toast.info(`ℹ️ ${message}`);
export const notifyWarn = (message: string) => toast.warn(`⚠️ ${message}`);