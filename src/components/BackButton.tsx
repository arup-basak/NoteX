import React from 'react'
import {
  goBack
} from 'react-chrome-extension-router';

const BackButton = () => {
  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      onClick={() => goBack()}
      className="inline-block w-[40px] aspect-square m-2 p-1 text-black text-3xl leading-tight rounded-full shadow-md hover:bg-slate-300 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-500 active:shadow-lg transition duration-150 ease-in-out">
      &#8249;
    </button>
  )
}
export default BackButton