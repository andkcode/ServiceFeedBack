import { useState, useEffect } from 'react';
import FormComponent from '../components/FormComponent';
import Feedbacks from '../views/Feedbacks';
import FeedbackService from '../composables/FeedbackService';

interface Feedback {
  id: number;
  comment: string;
  mark: number;
  createdAt: string;
  createdBy: string;
}

export default function Home() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllFeedbacks = async () => {
    try {
      const allFeedbacks = await FeedbackService.getAllFeedbacks();
      setFeedbacks(allFeedbacks);
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  return (
    <div className="flex flex-col min-h-full w-full items-center justify-center">
      <FormComponent onFeedbackSubmitted={getAllFeedbacks} />
      <Feedbacks feedbacks={feedbacks} loading={loading} />
    </div>
  );
}