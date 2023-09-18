import React from "react";
import IconWithTooltip from "./IconWithTooltip";

const CardProject = ({ title, icons, description, youtubeLink, imgSrc }) => (
  <div>
    <h2 className="text" style={{ marginBottom: "10px", overflow: "visible" }}>
      {title}
    </h2>
    <div className="home-grid-container-inner">
      <div style={{ gridColumn: "1 / span 2" }}>
        {icons.map((icon, index) => (
          <IconWithTooltip key={index} {...icon} />
        ))}
        <p className="text">{description}</p>
        <br />
        {youtubeLink && <a href={youtubeLink}>YouTube channel</a>}
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
