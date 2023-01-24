import BackButton from "../components/BackButton";
import PopUp from "./PopUp";

const NoteEditor = (id: number) => (
  <div className='flex flex-col'>
    <BackButton />
    <input type="text"
      className='w-fit p-2 m-2 outline-none bg-blue-400 text-lg'/>
    <textarea
      className='w-full p-2 m-2 bg-red-500 resize-none outline-none text-xl h-[400px]'></textarea>
    {/* <button onClick={() => goTo(Three, { id })}>
      Click me to go to component Three!
    </button> */}
  </div>
);

export default NoteEditor
