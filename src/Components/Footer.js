import React from "react";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full pt-8">
      <footer className="flex flex-wrap w-full items-center justify-center">
        <div
          style={{ color: props.textColor }}
          className="mb-12 text-sm font-normal opacity-80"
        >
          &copy; {currentYear} RootPi AB
        </div>
      </footer>
    </div>
  );
}

export default Footer;
