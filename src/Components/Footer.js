import React from "react";
import "../css/footer.css";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-box">
      <footer className="footer center-content">
        <div
          style={{
            color: props.textColor,
            marginBottom: "50px",
          }}
          className="copyright"
        >
          &copy; {currentYear} RootPi AB
        </div>
      </footer>
    </div>
  );
}

export default Footer;
