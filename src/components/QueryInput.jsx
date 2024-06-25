import { useState, useRef } from "react";
import Options from "./Options";

const QueryInput = () => {
  const [query, setQuery] = useState("");

  const inputRef = useRef(null);

  // Method to focus the input field using the ref
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleUserQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className='border-5 border-red-400s'>
      <footer className='p-4 border-t border-black-300 flex flex-col items-center'>
        <Options setQuery={setQuery} focusInput={focusInput} />
        <div className='w-full flex'>
          <input
            type='text'
            className='flex-grow p-2 border rounded-l'
            placeholder='Type in a query...'
            value={query}
            ref={inputRef}
            onChange={(e) => handleUserQuery(e)}
          />
          <button
            className='p-2 bg-emerald-600 text-white rounded-r'
            onClick={() => handleRunPython(query)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default QueryInput;
