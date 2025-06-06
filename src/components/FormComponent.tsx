import StarComponent from './StarComponent';


export default function FormComponent() {

  return (
    <>
    <div className="flex flex-col min-h-screen w-full">
    <form action="" className='w-full flex flex-col items-center justify-center gap-4'>
    <h3 className='text-2xl'>Give us your feedback!</h3>
    <input type="text" name="textArea" id="textArea" className='w-[40rem] h-[10rem] bg-gray-600' />
    {/* <StarComponent /> */}
    <button>Send Feedback</button>
</form>
    </div>
    </>
  )
}


