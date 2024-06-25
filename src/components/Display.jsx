import React from "react";
import QueryBubble from "./QueryBubble";

const Display = ({
  toggleTableVisibility,
  loading,
  query,
  analysis,
  analysisData,
  handleRunPython,
  thumbsUpAnimation,
}) => {
  return (
    <div>
      {/* Display */}
      {/* <main className='flex-1 p-4 flex mb-4'>
        {loading ? (
          <div className='justify-center items-center m-auto'>
            <ClipLoader color={"#36d7b7"} loading={loading} size={50} />
          </div>
        ) : (
          analysis && (
            <div className='relative flex flex-col items-start space-y-4 w-full'>
              <QueryBubble query={query} />
              <div className='bg-gray-100 p-4 rounded-lg shadow-md w-full relative'>
                <p className='text-gray-900'>{analysis}</p>
                <div className='absolute -bottom-4 right-2 flex space-x-2'>
                  <button
                    className='px-1 py-1 text-sm flex items-center justify-center transform hover:scale-125 transition-transform'
                    onClick={() => handleRunPython(query)}
                  >
                    <FiRefreshCw size={16} />
                  </button>
                  <button
                    className={`px-1 py-1 text-sm transform hover:scale-125 transition-transform ${
                      thumbsUpAnimation ? "animate-bounce" : ""
                    }`}
                    onClick={handleThumbsUpClick}
                  >
                    <FaThumbsUp />
                  </button>
                </div>
                <Table data={data} />
              </div>
            </div>
          )
        )} */}
      <main className='flex-1 p-4 flex mb-4'>
        {loading ? (
          <div className='justify-center items-center m-auto'>
            <ClipLoader color={"#36d7b7"} loading={loading} size={50} />
          </div>
        ) : (
          analysis && (
            <div className='relative flex flex-col items-start space-y-4 w-full'>
              <QueryBubble query={query} />
              <div className='bg-gray-100 p-4 rounded-lg shadow-md w-full relative'>
                <p className='text-gray-900'>{analysisData}</p>
                <div className='absolute -bottom-4 right-2 flex space-x-2'>
                  <button
                    className='px-1 py-1 text-sm flex items-center justify-center transform hover:scale-125 transition-transform'
                    onClick={() => handleRunPython(query)}
                  >
                    <FiRefreshCw size={16} />
                  </button>
                  <button
                    className={`px-1 py-1 text-sm transform hover:scale-125 transition-transform ${
                      thumbsUpAnimation ? "animate-bounce" : ""
                    }`}
                    onClick={handleThumbsUpClick}
                  >
                    <FaThumbsUp />
                  </button>
                </div>
              </div>
              <button
                className=' px-4 py-1 text-sm bg-emerald-600 text-white rounded-md'
                onClick={toggleTableVisibility}
              >
                {showTable ? (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Hide Table <FaChevronUp />
                  </span>
                ) : (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View Table <FaChevronDown />
                  </span>
                )}
              </button>
              {showTable && (
                <div className='bg-gray-100 p-4 rounded-lg shadow-md w-full relative'>
                  <pre className='text-gray-900 whitespace-pre-wrap'>
                    {tableData}
                  </pre>
                </div>
              )}
            </div>
          )
        )}
        {/* {loading ? (
          <div className='justify-center items-center m-auto'>
            <ClipLoader color={"#36d7b7"} loading={loading} size={50} />
          </div>
        ) : (
          <Table data={data} />
        )} */}
      </main>
    </div>
  );
};

export default Display;
