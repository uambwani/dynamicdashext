const Options = ({ setQuery, focusInput }) => {
  const preOptions = [
    "Month on Month Growth",
    "Time Series Analysis of Product Line",
    "Highest Selling Product",
    "Cluster Analysis",
  ];

  const handleOptionClick = (option) => {
    setQuery(option);
    focusInput();
  };

  return (
    <div className='grid gap-6 grid-cols-2 mt-6 mb-10'>
      {preOptions.map((option, i) => (
        <div
          className='transition-transform transform hover:scale-105 duration-200 ease-in-out hover:bg-zinc-100'
          style={{
            borderRadius: "5px",
            padding: "15px",
            cursor: "pointer",
            textAlign: "center",
            boxShadow: "3.6px 7.2px 7.2px hsla(0, 0%, 0%, 0.39)",
            transition: "all 0.2s ease-in-out",
          }}
          key={i}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Options;
