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

export default function FormComponent() {

  return (
    <>
    <div className="flex flex-col min-h-full w-full items-center justify-center">
    <form className="w-full flex flex-col items-center justify-center gap-4">
    <h3 className='text-2xl'>Give us your feedback!</h3>
    <textarea 
    name="textArea" 
    id="textArea" 
    className="w-[40rem] h-[10rem] text-white text-left align-top p-4 border border-gray-400 rounded-xl resize-none" 
    placeholder="Type your feedback here..."
        />
    <StarComponent />
    <button>Send Feedback</button>
</form>
    </div>
    </>
  )
}


