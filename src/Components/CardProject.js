import React from "react";
import IconArray from "./IconArray";

const CardProject = ({ title, icons, description, link, linkText, imgSrc }) => (
  <div>
    <h2 className="text" style={{ marginBottom: "10px", overflow: "visible" }}>
      {title}
    </h2>
    <div className="home-grid-container-inner">
      <div style={{ gridColumn: "1 / span 2" }}>
        <div className="">
          <IconArray icons={icons} />
        </div>
        <p className="text">{description}</p>
        <br />
        {link && <a href={link}>{linkText}</a>}
      </div>
      <img
        className="home-card-image-container rounded-image"
        src={imgSrc}
        alt=""
      />
    </div>
  </div>
);

export default CardProject;
