import React from "react";
import IconArray from "./IconArray";

const CardProject = ({ title, icons, description, link, linkText, imgSrc }) => (
  <div>
    <h2 className="text mb-2 overflow-visible">{title}</h2>
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2">
        <div className="">
          <IconArray icons={icons} />
        </div>
        <p className="text">{description}</p>
        <br />
        {link && <a href={link}>{linkText}</a>}
      </div>
      <img
        className="w-full rounded-full shadow-lg bg-white mb-5"
        src={imgSrc}
        alt=""
      />
    </div>
  </div>
);

export default CardProject;
