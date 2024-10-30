import React from "react";

const Navbar = ({ searchText, setSearchText }) => {
  return (
    <div className="m-10">
      <h1 className="m-7 text-center text-3xl font-bold text-cyan-500">
        เที่ยวไหนดี
      </h1>

      <div className="text-xs ">
        <h1>ค้นหาที่เที่ยว</h1>

        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-b border-gray-300 w-full text-center py-2 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Navbar;
