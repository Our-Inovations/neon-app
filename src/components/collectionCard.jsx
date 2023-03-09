import React from "react";
import { Link } from "react-router-dom";

export default function CollectionCard({ image_path
  , name, id }) {
  return (
    <div className="h-80 w-80">
      <img
        src={'https://admin.pickaneon.com/'+image_path
      }
        alt={`image of ${name} collection`}
        className="rounded-lg h-full w-full"
      />
      <div className="text-center -mt-24">
        <h3 className="text-white text-lg tracking-wide mb-2">{name}</h3>
        <Link to={`./${id}`}>
          <button className="bg-pink  hover:bg-pink/80 duration-75 transition ease-linear rounded-full px-6 py-3 w-10/12 text-white text-sm">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
}
