import {Link} from "react-router-dom";
import React from "react";

const Card = ({ target, description, title, color, btnColor="bg-black", url="/jobs"}) => {
  return (
    <>
      <div
        className={`${color} p-6 rounded-lg shadow-md`} 
      >
        <h2 className="text-2xl font-bold">For {target}</h2>
        <p className="mt-2 mb-4">{description}</p>
        <Link
          to={url}
          className={`${btnColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
        >
          {title}
        </Link>
      </div>
    </>
  );
};

export default Card;
