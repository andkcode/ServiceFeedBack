import '../styles/App.css';
import StarComponent from './StarComponent';


export default function FormComponent() {

  return (
    <>
    <div className="flex flex-col min-h-screen w-full">
    <form action="" className='w-full'>
    <input type="text" name="textArea" id="textArea" className='w-full h-20 bg-white' />
    {/* <StarComponent /> */}
    <button>Send Feedback</button>
</form>
    </div>
    </>
  )
}


