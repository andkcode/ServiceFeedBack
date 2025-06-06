import StarComponent from './StarComponent';


export default function FormComponent() {

  return (
    <>
    <div className="flex flex-col min-h-full w-full items-center justify-center">
    <form className="w-full flex flex-col items-center justify-center gap-4">
    <h3 className='text-2xl'>Give us your feedback!</h3>
    <input type="text" name="textArea" id="textArea" className='w-[40rem] h-[10rem] bg-gray-700 text-white pl-0 pt-0 text-left border-1 border-gray-400 focus:border-gray-500 rounded-xl' />
    {/* <StarComponent /> */}
    <button>Send Feedback</button>
</form>
    </div>
    </>
  )
}


