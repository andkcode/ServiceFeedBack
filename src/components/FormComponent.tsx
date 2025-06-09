import { useState, useEffect } from 'react';
import StarComponent from './StarComponent';
import FeedbackService from '../composables/FeedbackService';

interface Feedback {
  id?: number;
  comment?: string;
  mark?: number;
  createdAt?: string;
  createdBy?: string;
}
interface FormProps {
  onFeedbackSubmitted: () => void;
}

export default function FormComponent({ onFeedbackSubmitted }: FormProps) {
  const [comment, setComment] = useState('');
  const [mark, setMark] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  const saveFeedback = async () => {
    setLoading(true);
    try {
      const feedback: Feedback = { comment, mark: mark || 0, createdAt: new Date().toISOString() };
      await FeedbackService.createFeedback(feedback);
      setComment('');
      setMark(null);
      onFeedbackSubmitted();
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllFeedbacks = async () => {
    try {
      const allFeedbacks = await FeedbackService.getAllFeedbacks();
      setFeedbacks(allFeedbacks);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllFeedbacks();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveFeedback();
  };

  return (
    <div className="flex flex-col min-h-full w-full items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center gap-4">
        <h3 className="text-2xl">Give us your feedback!</h3>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="textArea"
          id="textArea"
          className="w-[40rem] h-[10rem] text-white text-left align-top p-4 border border-gray-400 rounded-xl resize-none"
          placeholder="Type your feedback here..."
        />
        <StarComponent mark={mark} setMark={setMark} />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          disabled={loading || !comment}
        >
          {loading ? 'Sending...' : 'Send Feedback'}
        </button>
      </form>
    </div>
  );
}
