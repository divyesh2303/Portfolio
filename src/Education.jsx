import React, { useEffect } from "react";
import { gsap } from "gsap";
import data from "./assets/data.json";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { useGSAP } from "@gsap/react";

const Education = () => {
  return (
    <div className="container pages4">
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
