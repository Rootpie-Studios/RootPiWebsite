import React from "react";
import "../css/footer.css";

function Footer(props) {
  return (
    <div className="footer-box">
      <footer className="footer center-content">
        <div
          style={{
            color: props.textColor,
            marginTop: "80px",
            marginBottom: "50px",
          }}
          className="copyright"
        >
          &copy; 2023 RootPi AB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
