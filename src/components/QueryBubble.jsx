import React from "react";

const QueryBubble = ({ query }) => {
  return (
    <div className='flex justify-end w-full'>
      <div className='bg-emerald-100 p-4 rounded-lg shadow-md w-auto max-w-xs text-right'>
        <p className='text-gray-900'>{query}</p>
      </div>
    </div>
  );
};

export default QueryBubble;
