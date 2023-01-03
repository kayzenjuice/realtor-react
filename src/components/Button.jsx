import React from "react";

const Button = (title) => {
  return (
    <div>
      <button
        className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
        type="submit"
      >
        <p>{title.title}</p>
      </button>
    </div>
  );
};

export default Button;
