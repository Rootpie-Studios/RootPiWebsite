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
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            <span>{linkText}</span>
            <svg
              className="card-button-arrow"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
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
