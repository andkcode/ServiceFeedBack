import axios from "axios";
import { getAuthHeader } from "./getAuthHeader";

const API_URL = "http://localhost:8080/api";

export default class FeedbackService {
    static async getAllFeedbacks() {
        try {
            const response = await axios.get(API_URL, getAuthHeader());
            return response.data;
        } catch (error) {
            console.error("Error fetching feedbacks:", error);
            throw new Error("Failed to fetch feedbacks");
        }
    }

    static async getFeedbackById(id: number) {
        try {
            const response = await axios.get(`${API_URL}/${id}`, getAuthHeader());
            return response.data;
        } catch (error) {
            console.error(`Error fetching feedback ${id}:`, error);
            throw error;
        }
    }

    static async createFeedback(feedback: any, isMultipart = false) {
        try {
            const contentType = isMultipart ? 'multipart/form-data' : 'application/json';
            const response = await axios.post(`${API_URL}/save`, feedback, getAuthHeader(contentType));
            return response.data;
        } catch (error) {
            console.error("Error creating feedback:", error);
            throw error;
        }
    }

    static async updateFeedback(id: number, feedback: any, isMultipart = false) {
        try {
            const contentType = isMultipart ? 'multipart/form-data' : 'application/json';
            const response = await axios.put(`${API_URL}/update/${id}`, feedback, getAuthHeader(contentType));
            return response.data;
        } catch (error) {
            console.error(`Error updating feedback ${id}:`, error);
            throw error;
        }
    }

    static async deleteFeedback(id: number) {
        try {
            await axios.delete(`${API_URL}/delete/${id}`, getAuthHeader());
        } catch (error) {
            console.error(`Error deleting feedback ${id}:`, error);
            throw error;
        }
    }
}
