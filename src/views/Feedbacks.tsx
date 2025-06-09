import FeedbackCard from '../components/FeedbackCard';

interface Feedback {
  id: number;
  comment: string;
  mark: number;
  createdAt: string;
  createdBy: string;
}

interface FeedbackProps {
  feedbacks: Feedback[];
  loading: boolean;
}

export default function Feedbacks({ feedbacks, loading }: FeedbackProps) {
  if (loading) {
    return <p className="text-white">Loading feedbacks...</p>;
  }

  return (
    <>
      <h1 className="text-base font-thin text-white px-4 py-2">All Feedbacks</h1>
      <div className="space-y-6">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            id={feedback.id}
            comment={feedback.comment}
            mark={feedback.mark}
            createdAt={feedback.createdAt}
            createdBy={feedback.createdBy}
          />
        ))}
      </div>
    </>
  );
}
