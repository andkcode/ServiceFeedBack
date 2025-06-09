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

  return (
    <div className="flex flex-col min-h-full w-full items-center justify-center">
    <FormComponent/>
    </div>
  )
}


