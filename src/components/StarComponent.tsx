import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface StarComponentProps {
  mark: number | null;
  setMark: (mark: number) => void;
}

export default function StarComponent({ mark, setMark }: StarComponentProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-row w-full text-3xl items-center justify-center">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hover || rating); 

        return (
          <div
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer transition-colors"
          >
            {isFilled ? (
              <FaStar className="text-yellow-400" />
            ) : (
              <CiStar className="text-gray-400 hover:text-yellow-400" />
            )}
          </div>
        );
      })}
    </div>
  );
}