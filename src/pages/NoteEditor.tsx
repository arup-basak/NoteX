import BackButton from "../components/BackButton";

const NoteEditor = (id: number) => (
  <div>
    <BackButton />
    <div className="flex flex-col">
      <input type="text"
        className='w-[400px] outline-none bg-blue-300 text-lg m-2 p-2 rounded'/>
      <textarea
        className='bg-blue-200 w-[400px] resize-none outline-none text-xl h-[400px] m-2 p-2 rounded'></textarea>
    </div>
  </div>
);

export default NoteEditor
