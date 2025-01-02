import React from "react";
import data from "./assets/data";
console.log("🚀 ~ data:", data);

const Education = () => {
  return (
    <div>
      {data?.education?.map((ele, index) => (
        <div className="card-body" key={index}>
          <h3 className="degree-title">{ele.degree}</h3>
          <h3 className="school-title">{ele.school}</h3>
          <div className="loc-tim">
            <span>{ele.location}</span>
            <span>{ele.duration}</span>
          </div>
          <p className="description-text">{ele.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
