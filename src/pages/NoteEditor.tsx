import BackButton from "../components/BackButton";

const NoteEditor = (id: number) => (
  <div className='flex flex-col'>
    <BackButton />
    <input type="text"
      className='w-max p-2 m-2 outline-none bg-blue-400 w-100%' />
    <textarea
      className='w-max p-2 m-2 bg-red-500 resize-none outline-none'></textarea>
    {/* <button onClick={() => goTo(Three, { id })}>
      Click me to go to component Three!
    </button> */}
  </div>
);

export default NoteEditor
