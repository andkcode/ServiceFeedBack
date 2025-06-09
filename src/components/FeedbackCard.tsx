import React from 'react';

interface FeedbackCardProps {
  id?: number;
  comment?: string;
  mark?: number;
  createdAt?: string;
  createdBy?: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  comment,
  mark,
  createdAt,
  createdBy,
}) => {
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : 'No date';

  const getMarkStyle = () => {
    if (mark === undefined) return 'bg-neutral-700 text-neutral-300';
    if (mark >= 4) return 'bg-green-700/20 text-green-400';
    if (mark >= 3) return 'bg-yellow-700/20 text-yellow-400';
    return 'bg-red-700/20 text-red-400';
  };

  return (
    <div className="w-[45rem] bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-base font-medium text-white">{createdBy || 'Anonymous'}</span>
        <span className="text-sm text-neutral-400">{formattedDate}</span>
      </div>

      <p className="text-neutral-300">{comment || 'No comment provided.'}</p>

      <div className="flex justify-end">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${getMarkStyle()}`}
        >
          {mark !== undefined ? `Mark: ${mark}/5` : 'No mark'}
        </span>
      </div>
    </div>
  );
};

export default FeedbackCard;
