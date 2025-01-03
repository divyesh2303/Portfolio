import React, { useEffect, useRef } from "react";
import data from "./assets/data.json";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

console.log("🚀 ~ data:", data);
console.log("🚀 ~ data:", data?.data);
console.log("🚀 ~ data:", data?.projects);
const Education = () => {
  const containerRef = useRef(null);

  return (
    <div className="container pages4" ref={containerRef}>
      {data?.data?.map((ele, index) => (
        <div className="p-2 card-body" key={index}>
          <h3 className="p-2 degree-title">{ele?.degree}</h3>
          <h3 className="p-2 school-title">{ele?.school}</h3>
          <div className="p-2 loc-tim">
            <span>
              <CiLocationOn style={{ fontWeight: "bold" }} />
              {ele?.location}
            </span>
            <span>
              <IoMdTime />
              {ele?.duration}
            </span>
          </div>
          <p className="p-2 description-text">{ele?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
