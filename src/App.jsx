import { useState, useRef } from "react";
import { Nav, Display, QueryInput, QueryBubble, Options } from "./components";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { FiRefreshCw } from "react-icons/fi";
import { FaThumbsUp, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [analysis, setAnalysis] = useState("");
  const [displayData, setDisplayedData] = useState("");
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [thumbsUpAnimation, setThumbsUpAnimation] = useState(false);
  const [data, setData] = useState([]);

  // show table and split data
  const [showTable, setShowTable] = useState(false);

  const toggleTableVisibility = () => {
    setShowTable((prevShowTable) => !prevShowTable);
  };

  // new table
  // const parseBackendResponse = (response) => {
  //   const splitData = response.split("Result:");
  //   const sqlData = splitData[0].trim(); // SQL data before 'Result:'
  //   const tableData2 = splitData[1] ? splitData[1].trim() : ""; // Table data after 'Result:', if present
  //   console.log("SQL Data:", sqlData);
  //   console.log("Table Data:", tableData2);
  //   return { sqlData, tableData2 }; // Return an object with sqlData and tableData2
  // };

  // const { sqlData, tableData2 } = analysis
  //   ? parseBackendResponse(analysis)
  //   : { sqlData: null, tableData2: null };
  // new table

  const inputRef = useRef(null);

  //focus input field using ref
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // animation
  const handleThumbsUpClick = () => {
    setThumbsUpAnimation(true);
    console.log("Response added to cache");
    setTimeout(() => {
      setThumbsUpAnimation(false);
    }, 1000);
  };

  const handleUserQuery = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleRunPython = async (query) => {
    setLoading(true);
    // Show "In Progress" toast
    const inProgressToastId = toast.info("Generating Analysis...", {
      autoClose: false,
    });

    setAnalysis("");
    setDisplayedData("");
    setData([]);

    console.log(query);

    try {
      const response = await fetch("http://127.0.0.1:3001/run-python", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
      const data = await response.json();
      console.log("Data from Python file:", data);

      // const { sqlData, tableData2 } = analysis
      //   ? parseBackendResponse(analysis)
      //   : { sqlData: null, tableData2: null };

      if (response.ok) {
        setAnalysis(data.result);
        console.log("type of response", typeof data.result);

        toast.dismiss(inProgressToastId);
        toast.success("Analysis Generated!");
      } else {
        console.error("Error from backend:", data.error);
        toast.error("Error analyzing file. Please try again.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Error running Python file:", error);

      setLoading(false);
      toast.dismiss(inProgressToastId);
      // Show "Error" toast
      toast.error("Error analyzing file. Please try again.");
    }
  };

  return (
    <div className='flex flex-col min-h-screen w-3/5 mx-auto'>
      <Nav />
      {/* Input */}
      <div className='border-5 border-red-400s'>
        <footer className='p-4 border-t border-black-300 flex flex-col items-center'>
          {/* <Options setQuery={setQuery} focusInput={focusInput} /> */}
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
      {/* Input */}
      {/* Display */}
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
                {/* <p className='text-gray-900'>{analysisData}</p> */}
                <p
                  className='text-gray-900'
                  dangerouslySetInnerHTML={{ __html: analysis }}
                >
                  {/* {analysis} */}
                </p>
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
                    Hide Analysis <FaChevronUp />
                  </span>
                ) : (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    View Analysis <FaChevronDown />
                  </span>
                )}
              </button>
              {showTable && (
                <div className='bg-gray-100 p-4 rounded-lg shadow-md w-full relative'>
                  <pre className='text-gray-900 whitespace-pre-wrap'>
                    {analysis}
                    {/* {sqlData} */}
                  </pre>
                </div>
              )}
            </div>
          )
        )}
      </main>
      {/* Display */}
    </div>
  );
}

export default App;
