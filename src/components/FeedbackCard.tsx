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
  const formattedDate = createdAt ? new Date(createdAt).toLocaleDateString() : 'No date provided.';
  return (
    <div className="flex flex-col w-[50rem] bg-white border border-gray-300 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">{createdBy}</span>
        <span className="text-sm text-gray-500">{formattedDate}</span>
      </div>
      <p className="text-gray-700">{comment || "No comment provided."}</p>
      <div className="flex justify-end">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${
            mark && mark >= 4
              ? 'bg-green-100 text-green-700'
              : mark && mark >= 2
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {mark ? `Mark: ${mark}/5` : 'No mark'}
        </span>
      </div>
    </div>
  );
};

export default FeedbackCard;
