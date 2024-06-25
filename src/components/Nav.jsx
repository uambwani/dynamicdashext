import { useState } from "react";

const Nav = () => {
  const [activeLink, setActiveLink] = useState("analytics");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className='flex items-center justify-between p-4 border-b border-black-300'>
      <div className='flex items-center'>
        <div className='rounded-full p-2 mr-2'>
          <img
            // src='https://imgs.search.brave.com/Btz7GGgl11Em5jT-HM4PsEB9YYbgLnWhazq7k-Z3J98/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9E/Q01TSFJJUkFNLk5T/LThmYTljMWRmLnBu/Zz90PTE2MDQwNjcw/MzI'
            src='https://companieslogo.com/img/orig/DCMSHRIRAM.NS-8fa9c1df.png?t=1604067032'
            alt='Logo'
            className='h-8 w-8'
          />
        </div>
        <span className='text-lg font-bold'>DCM Dashboards</span>
      </div>
      <div className='flex space-x-4'>
        <button
          href='/analytics'
          onClick={() => handleLinkClick("analytics")}
          className={`text-gray-700 hover:text-gray-900 ${
            activeLink === "analytics" ? "border-b-2 border-emerald-600" : ""
          }`}
        >
          Analytics
        </button>
        <button
          href='/dashboards'
          onClick={() => handleLinkClick("dashboards")}
          className={`text-gray-700 hover:text-gray-900 ${
            activeLink === "dashboards" ? "border-b-2 border-emerald-600" : ""
          }`}
        >
          Dashboards
        </button>
      </div>
    </nav>
  );
};

export default Nav;
